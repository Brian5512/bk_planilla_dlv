$ErrorActionPreference = "Stop"

$internalRoot = Split-Path -Parent $PSScriptRoot
$projectRoot = Split-Path -Parent $internalRoot
$target = Join-Path $projectRoot "Control mensual DLV.html"
$icon = Join-Path $internalRoot "app\assets\icons\app-icon.ico"
$desktop = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path $desktop "Control mensual DLV.lnk"

if (!(Test-Path -LiteralPath $target)) {
  throw "No se encontro Control mensual DLV.html en $projectRoot"
}

if (!(Test-Path -LiteralPath $icon)) {
  throw "No se encontro el icono en $icon"
}

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $target
$shortcut.WorkingDirectory = $projectRoot
$shortcut.IconLocation = "$icon,0"
$shortcut.Description = "Abrir Control mensual DLV"
$shortcut.Save()

Write-Host "Acceso directo creado en el escritorio:"
Write-Host $shortcutPath
