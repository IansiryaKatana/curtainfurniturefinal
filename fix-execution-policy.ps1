# Fix PowerShell Execution Policy
# Run this script as Administrator or it will set for CurrentUser only

Write-Host "Setting PowerShell Execution Policy..." -ForegroundColor Yellow

try {
    # Try to set for CurrentUser (doesn't require admin)
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
    Write-Host "✓ Execution policy set to RemoteSigned for CurrentUser" -ForegroundColor Green
} catch {
    Write-Host "Failed to set execution policy. You may need to run PowerShell as Administrator." -ForegroundColor Red
    Write-Host "Error: $_" -ForegroundColor Red
}

Write-Host "`nCurrent Execution Policy:" -ForegroundColor Cyan
Get-ExecutionPolicy -List

Write-Host "`nYou can now run: npm run dev" -ForegroundColor Green


