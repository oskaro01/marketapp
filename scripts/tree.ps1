function Show-Tree {
    param([string]$Path = ".", [string]$Indent = "")
    Get-ChildItem $Path | Where-Object { $_.Name -ne 'node_modules' } | ForEach-Object {
        if ($_.PSIsContainer) {
            Write-Host "$Indent >  $($_.Name)"
            Show-Tree -Path $_.FullName -Indent "$Indent  "
        } else {
            Write-Host "$Indent    -   $($_.Name)"
        }
    }
}
Show-Tree

# then this to json >> 

# {
#  "scripts": {
#    "tree": "powershell -File ./scripts/tree.ps1"
#  }
# } 