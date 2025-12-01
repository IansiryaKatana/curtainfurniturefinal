import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Search } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";

export const AdminQuotesManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: quotes, isLoading } = useQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quotes")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const deleteQuoteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("quotes")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
      toast({
        title: "Success",
        description: "Quote deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from("quotes")
        .update({ status })
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
      toast({
        title: "Success",
        description: "Status updated successfully",
      });
    },
  });

  const filteredQuotes = quotes?.filter((quote) => {
    const matchesSearch = 
      quote.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.phone.includes(searchTerm);
    
    const matchesStatus = statusFilter === "all" || quote.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return <div className="text-muted-foreground">Loading quotes...</div>;
  }

  if (!quotes || quotes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No quote requests yet</p>
        <p className="text-muted-foreground text-sm mt-2">Quote requests will appear here once customers submit the form</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="quoted">Quoted</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredQuotes && filteredQuotes.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No quotes match your search criteria
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuotes?.map((quote) => (
            <Card key={quote.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
                <div className="space-y-1 flex-1">
                  <CardTitle className="text-lg">{quote.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{quote.email}</span>
                    <span>•</span>
                    <span>{quote.phone}</span>
                  </div>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Quote</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this quote request? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => deleteQuoteMutation.mutate(quote.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Location:</span>
                    <p className="font-medium">{quote.location}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Project Type:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {quote.project_type.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {quote.product_type && (
                    <div>
                      <span className="text-muted-foreground">Product:</span>
                      <p className="font-medium capitalize">{quote.product_type}</p>
                    </div>
                  )}
                  {quote.room_type && (
                    <div>
                      <span className="text-muted-foreground">Room:</span>
                      <p className="font-medium capitalize">{quote.room_type}</p>
                    </div>
                  )}
                  {quote.num_windows && (
                    <div>
                      <span className="text-muted-foreground">Windows:</span>
                      <p className="font-medium">{quote.num_windows}</p>
                    </div>
                  )}
                  {(quote.width || quote.height) && (
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <p className="font-medium">
                        {quote.width ? `${quote.width}cm` : "—"} × {quote.height ? `${quote.height}cm` : "—"}
                      </p>
                    </div>
                  )}
                  {quote.budget_range && (
                    <div>
                      <span className="text-muted-foreground">Budget:</span>
                      <p className="font-medium">{quote.budget_range}</p>
                    </div>
                  )}
                  {quote.preferred_contact_time && (
                    <div>
                      <span className="text-muted-foreground">Contact Time:</span>
                      <p className="font-medium capitalize">{quote.preferred_contact_time}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Created:</span>
                    <p className="font-medium">{new Date(quote.created_at || "").toLocaleDateString()}</p>
                  </div>
                </div>
                {quote.additional_details && (
                  <div>
                    <span className="text-muted-foreground text-sm">Additional Details:</span>
                    <p className="text-sm mt-1 whitespace-pre-wrap">{quote.additional_details}</p>
                  </div>
                )}
                <div className="flex items-center gap-3 pt-2 border-t">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <Select
                    value={quote.status || "pending"}
                    onValueChange={(status) => updateStatusMutation.mutate({ id: quote.id, status })}
                  >
                    <SelectTrigger className="w-40 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="quoted">Quoted</SelectItem>
                      <SelectItem value="accepted">Accepted</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
