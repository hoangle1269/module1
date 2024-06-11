# Array of submodules with modified or untracked content
$submodules = @("Casemodule1", "Danhsach", "Formcoban", "HTMLproject", "baiTapModule1", "formdknd", "testModule1")

# Iterate over each submodule
foreach ($submodule in $submodules) {
    Write-Output "Processing submodule: $submodule"
    
    # Enter the submodule directory
    Set-Location $submodule

    # Check if there are changes to commit
    $status = git status --porcelain
    if ($status) {
        Write-Output "Changes detected in $submodule. Committing changes..."

        # Stage all changes
        git add .

        # Commit the changes
        git commit -m "Commit changes in submodule $submodule"

        # Return to the main project directory
        Set-Location ..
    } else {
        Write-Output "No changes to commit in $submodule."
        Set-Location ..
    }
}

# Stage the submodule reference updates in the main project
git add $submodules

# Commit the submodule reference updates
git commit -m "Update submodule references"
