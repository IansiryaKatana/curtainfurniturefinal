import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Upload, X, Image as ImageIcon, Loader2, CheckSquare, Square } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UploadFile {
  file: File;
  preview: string;
  title: string;
  category: string;
  room_type: string;
  is_active: boolean;
}

export const AdminGalleryManager = () => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());
  const [bulkEditOpen, setBulkEditOpen] = useState(false);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState("curtains");
  const [defaultRoomType, setDefaultRoomType] = useState("none");
  const [bulkEditData, setBulkEditData] = useState({
    category: "",
    room_type: "none",
    is_active: true,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    category: "curtains",
    room_type: "",
    display_order: 0,
    is_active: true,
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: images } = useQuery({
    queryKey: ["admin-gallery"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from("gallery_images").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      toast({ title: "Gallery image added successfully" });
      resetForm();
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: typeof formData }) => {
      const { error } = await supabase.from("gallery_images").update(data).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      toast({ title: "Gallery image updated successfully" });
      resetForm();
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("gallery_images").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      toast({ title: "Gallery image deleted successfully" });
      setDeleteId(null);
    },
    onError: (error: any) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const resetForm = () => {
    setFormData({
      title: "",
      image_url: "",
      category: "curtains",
      room_type: "",
      display_order: images?.length || 0,
      is_active: true,
    });
    setEditingId(null);
  };

  const handleEdit = (image: any) => {
    setFormData({
      title: image.title,
      image_url: image.image_url,
      category: image.category,
      room_type: image.room_type || "",
      display_order: image.display_order || 0,
      is_active: image.is_active,
    });
    setEditingId(image.id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateMutation.mutate({ id: editingId, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  // Generate smart file name based on category, room type, and title
  const generateFileName = (file: File, category: string, roomType: string, title: string): string => {
    const timestamp = Date.now();
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const sanitizedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .substring(0, 30);
    const roomPart = roomType ? `-${roomType}` : '';
    // Don't include 'gallery/' prefix since we're already uploading to the 'gallery' bucket
    return `${category}${roomPart}-${sanitizedTitle}-${timestamp}.${extension}`;
  };

  // Handle file selection
  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    
    const newFiles: UploadFile[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const preview = URL.createObjectURL(file);
        const defaultTitle = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        newFiles.push({
          file,
          preview,
          title: defaultTitle,
          category: defaultCategory,
          room_type: defaultRoomType === "none" ? "" : defaultRoomType,
          is_active: true,
        });
      }
    });
    
    setUploadFiles([...uploadFiles, ...newFiles]);
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  // Remove file from upload list
  const removeUploadFile = (index: number) => {
    const file = uploadFiles[index];
    URL.revokeObjectURL(file.preview);
    setUploadFiles(uploadFiles.filter((_, i) => i !== index));
  };

  // Update upload file metadata
  const updateUploadFile = (index: number, updates: Partial<UploadFile>) => {
    setUploadFiles(uploadFiles.map((f, i) => i === index ? { ...f, ...updates } : f));
  };

  // Upload files to Supabase Storage
  const uploadFilesToSupabase = async () => {
    if (uploadFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one image to upload",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    const uploadPromises = uploadFiles.map(async (uploadFile, index) => {
      try {
        // Generate file name
        const fileName = generateFileName(
          uploadFile.file,
          uploadFile.category,
          uploadFile.room_type,
          uploadFile.title
        );

        // Upload to Supabase Storage
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('gallery')
          .upload(fileName, uploadFile.file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) {
          // If bucket doesn't exist
          if (uploadError.message.includes('Bucket not found') || uploadError.message.includes('not found')) {
            toast({
              title: "Storage bucket not found",
              description: "Please create a 'gallery' bucket in Supabase Storage (Dashboard > Storage > New Bucket). Make it public.",
              variant: "destructive",
            });
            throw uploadError;
          }
          // If RLS policy error
          if (uploadError.message.includes('row-level security') || uploadError.message.includes('RLS')) {
            toast({
              title: "Permission denied",
              description: "Storage policies not configured. Please run the migration: 20250102000000_setup_gallery_storage_policies.sql",
              variant: "destructive",
            });
            throw uploadError;
          }
          throw uploadError;
        }

        // Get public URL
        const { data: urlData } = supabase.storage
          .from('gallery')
          .getPublicUrl(fileName);

        // Insert into database
        const { error: dbError } = await supabase.from('gallery_images').insert({
          title: uploadFile.title,
          image_url: urlData.publicUrl,
          category: uploadFile.category,
          room_type: uploadFile.room_type || null,
          display_order: (images?.length || 0) + index,
          is_active: uploadFile.is_active,
        });

        if (dbError) throw dbError;

        // Clean up preview URL
        URL.revokeObjectURL(uploadFile.preview);

        return { success: true, fileName };
      } catch (error: any) {
        console.error('Upload error:', error);
        return { success: false, error: error.message, fileName: uploadFile.file.name };
      }
    });

    const results = await Promise.all(uploadPromises);
    const successCount = results.filter(r => r.success).length;
    const failCount = results.filter(r => !r.success).length;

    if (successCount > 0) {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      toast({
        title: "Upload complete",
        description: `${successCount} image(s) uploaded successfully${failCount > 0 ? `. ${failCount} failed.` : ''}`,
      });
      setUploadFiles([]);
    } else {
      toast({
        title: "Upload failed",
        description: "Failed to upload images. Please check your Supabase Storage configuration.",
        variant: "destructive",
      });
    }

    setUploading(false);
  };

  // Bulk edit mutation
  const bulkEditMutation = useMutation({
    mutationFn: async ({ ids, data }: { ids: string[]; data: { category?: string; room_type?: string | null; is_active?: boolean } }) => {
      const updates: any = {
        updated_at: new Date().toISOString(),
      };
      
      if (data.category !== undefined) updates.category = data.category;
      if (data.room_type !== undefined) {
        updates.room_type = data.room_type === null || data.room_type === "" ? null : data.room_type;
      }
      if (data.is_active !== undefined) updates.is_active = data.is_active;

      const { error } = await supabase
        .from("gallery_images")
        .update(updates)
        .in("id", ids);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      setSelectedImages(new Set());
      setBulkEditOpen(false);
      toast({
        title: "Success",
        description: `${selectedImages.size} image(s) updated successfully`,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  // Bulk delete mutation
  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      const { error } = await supabase
        .from("gallery_images")
        .delete()
        .in("id", ids);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      setSelectedImages(new Set());
      setBulkDeleteOpen(false);
      toast({
        title: "Success",
        description: `${selectedImages.size} image(s) deleted successfully`,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleBulkEdit = () => {
    if (selectedImages.size === 0) return;
    const updateData: { category?: string; room_type?: string | null; is_active?: boolean } = {};
    
    // Only include category if it's not empty (not "keep current")
    if (bulkEditData.category && bulkEditData.category !== "" && bulkEditData.category !== "keep") {
      updateData.category = bulkEditData.category;
    }
    
    // Only include room_type if it's not "keep"
    if (bulkEditData.room_type && bulkEditData.room_type !== "keep") {
      updateData.room_type = bulkEditData.room_type === "none" ? null : bulkEditData.room_type;
    }
    
    // Always update is_active
    updateData.is_active = bulkEditData.is_active;
    
    bulkEditMutation.mutate({
      ids: Array.from(selectedImages),
      data: updateData,
    });
  };

  const handleBulkDelete = () => {
    if (selectedImages.size === 0) return;
    bulkDeleteMutation.mutate(Array.from(selectedImages));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? "Edit Gallery Image" : "Add New Image"}</CardTitle>
          <CardDescription>Manage portfolio gallery images - Upload directly to Supabase Storage</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Files</TabsTrigger>
              <TabsTrigger value="url">Use URL</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="space-y-4 mt-4">
              {/* Default Category Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="space-y-2">
                  <Label>Default Category *</Label>
                  <Select
                    value={defaultCategory}
                    onValueChange={setDefaultCategory}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="curtains">Curtains</SelectItem>
                      <SelectItem value="blinds">Blinds</SelectItem>
                      <SelectItem value="upholstery">Upholstery</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    All uploaded images will use this category by default
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Default Room Type</Label>
                  <Select
                    value={defaultRoomType}
                    onValueChange={setDefaultRoomType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Any</SelectItem>
                      <SelectItem value="bedroom">Bedroom</SelectItem>
                      <SelectItem value="living">Living Room</SelectItem>
                      <SelectItem value="dining">Dining Room</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    All uploaded images will use this room type by default
                  </p>
                </div>
              </div>

              {/* Drag and Drop Area */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragging
                    ? 'border-primary bg-primary/5'
                    : 'border-muted-foreground/25 hover:border-primary/50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileSelect(e.target.files)}
                  className="hidden"
                />
                <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop images here, or click to select
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Select Images
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Supports multiple images. Files will be uploaded to Supabase Storage.
                </p>
              </div>

              {/* Upload Files List */}
              {uploadFiles.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {uploadFiles.length} image(s) ready to upload
                    </h3>
                    <Button
                      onClick={uploadFilesToSupabase}
                      disabled={uploading}
                      className="w-full sm:w-auto"
                    >
                      {uploading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Upload All ({uploadFiles.length})
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {uploadFiles.map((uploadFile, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="relative mb-3">
                            <img
                              src={uploadFile.preview}
                              alt={uploadFile.title}
                              className="w-full h-32 object-cover rounded"
                            />
                            <Button
                              size="sm"
                              variant="destructive"
                              className="absolute top-2 right-2 h-6 w-6 p-0"
                              onClick={() => removeUploadFile(index)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="space-y-1">
                              <Label className="text-xs">Title *</Label>
                              <Input
                                value={uploadFile.title}
                                onChange={(e) => updateUploadFile(index, { title: e.target.value })}
                                placeholder="Image title"
                                className="h-8 text-sm"
                              />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-1">
                                <Label className="text-xs">Category</Label>
                                <Select
                                  value={uploadFile.category}
                                  onValueChange={(value) => updateUploadFile(index, { category: value })}
                                >
                                  <SelectTrigger className="h-8 text-xs">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="curtains">Curtains</SelectItem>
                                    <SelectItem value="blinds">Blinds</SelectItem>
                                    <SelectItem value="upholstery">Upholstery</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="space-y-1">
                                <Label className="text-xs">Room</Label>
                                <Select
                                  value={uploadFile.room_type || "none"}
                                  onValueChange={(value) => updateUploadFile(index, { room_type: value === "none" ? "" : value })}
                                >
                                  <SelectTrigger className="h-8 text-xs">
                                    <SelectValue placeholder="Any" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="none">Any</SelectItem>
                                    <SelectItem value="bedroom">Bedroom</SelectItem>
                                    <SelectItem value="living">Living Room</SelectItem>
                                    <SelectItem value="dining">Dining Room</SelectItem>
                                    <SelectItem value="office">Office</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            
                            <p className="text-xs text-muted-foreground">
                              File: {uploadFile.file.name}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="url" className="mt-4">
              <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image_url">Image URL *</Label>
              <Input
                id="image_url"
                type="url"
                value={formData.image_url}
                onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                placeholder="https://example.com/image.jpg"
                required
              />
              {formData.image_url && (
                <img src={formData.image_url} alt="Preview" className="w-32 h-32 object-cover rounded mt-2" />
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curtains">Curtains</SelectItem>
                    <SelectItem value="blinds">Blinds</SelectItem>
                    <SelectItem value="upholstery">Upholstery</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="room_type">Room Type</Label>
                <Select
                  value={formData.room_type || "none"}
                  onValueChange={(value) => setFormData({ ...formData, room_type: value === "none" ? "" : value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select room" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Any</SelectItem>
                    <SelectItem value="bedroom">Bedroom</SelectItem>
                    <SelectItem value="living">Living Room</SelectItem>
                    <SelectItem value="dining">Dining Room</SelectItem>
                    <SelectItem value="office">Office</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="is_active">Status</Label>
              <Select
                value={formData.is_active ? "active" : "inactive"}
                onValueChange={(value) => setFormData({ ...formData, is_active: value === "active" })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                    {editingId ? "Update Image" : <><Plus className="mr-2 h-4 w-4" /> Add Image</>}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Bulk Actions Bar */}
      {selectedImages.size > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {selectedImages.size} image(s) selected
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedImages(new Set())}
                >
                  Clear
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setBulkEditData({
                      category: "",
                      room_type: "keep",
                      is_active: true,
                    });
                    setBulkEditOpen(true);
                  }}
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Bulk Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => setBulkDeleteOpen(true)}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Select All Toggle */}
      {images && images.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={selectedImages.size === images.length && images.length > 0}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedImages(new Set(images.map(img => img.id)));
                } else {
                  setSelectedImages(new Set());
                }
              }}
            />
            <Label className="text-sm font-medium cursor-pointer">
              Select All ({images.length})
            </Label>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images?.map((image) => (
          <Card key={image.id} className={selectedImages.has(image.id) ? "ring-2 ring-primary" : ""}>
            <CardContent className="p-4">
              <div className="relative mb-3">
                <img src={image.image_url} alt={image.title} className="w-full h-48 object-cover rounded mb-3" />
                <Checkbox
                  checked={selectedImages.has(image.id)}
                  onCheckedChange={(checked) => {
                    const newSelected = new Set(selectedImages);
                    if (checked) {
                      newSelected.add(image.id);
                    } else {
                      newSelected.delete(image.id);
                    }
                    setSelectedImages(newSelected);
                  }}
                  className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {image.category}
                  </span>
                  {image.room_type && (
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">
                      {image.room_type}
                    </span>
                  )}
                  {!image.is_active && (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      Inactive
                    </span>
                  )}
                </div>
                <h3 className="font-medium">{image.title}</h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(image)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => setDeleteId(image.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this image? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteId && deleteMutation.mutate(deleteId)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk Edit Dialog */}
      <Dialog open={bulkEditOpen} onOpenChange={setBulkEditOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Bulk Edit {selectedImages.size} Image(s)</DialogTitle>
            <DialogDescription>
              Update category, room type, or status for all selected images. Leave fields empty to keep current values.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Category</Label>
              <Select
                value={bulkEditData.category || "keep"}
                onValueChange={(value) => setBulkEditData({ ...bulkEditData, category: value === "keep" ? "" : value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Keep current" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="keep">Keep current</SelectItem>
                  <SelectItem value="curtains">Curtains</SelectItem>
                  <SelectItem value="blinds">Blinds</SelectItem>
                  <SelectItem value="upholstery">Upholstery</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Room Type</Label>
              <Select
                value={bulkEditData.room_type}
                onValueChange={(value) => setBulkEditData({ ...bulkEditData, room_type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Keep current" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="keep">Keep current</SelectItem>
                  <SelectItem value="none">Any</SelectItem>
                  <SelectItem value="bedroom">Bedroom</SelectItem>
                  <SelectItem value="living">Living Room</SelectItem>
                  <SelectItem value="dining">Dining Room</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                value={bulkEditData.is_active ? "active" : "inactive"}
                onValueChange={(value) => setBulkEditData({ ...bulkEditData, is_active: value === "active" })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setBulkEditOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleBulkEdit}
              disabled={bulkEditMutation.isPending}
            >
              {bulkEditMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Selected"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bulk Delete Dialog */}
      <AlertDialog open={bulkDeleteOpen} onOpenChange={setBulkDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {selectedImages.size} Image(s)?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedImages.size} selected image(s)? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleBulkDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={bulkDeleteMutation.isPending}
            >
              {bulkDeleteMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete Selected"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
