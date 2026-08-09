$ErrorActionPreference = "Stop"

$appRoot = Split-Path -Parent $PSScriptRoot
$target = Join-Path $appRoot "index.html"
$icon = Join-Path $appRoot "assets\icons\app-icon.ico"
$desktop = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path $desktop "Control mensual DLV.lnk"

if (!(Test-Path -LiteralPath $target)) {
  throw "No se encontro index.html en $appRoot"
}

if (!(Test-Path -LiteralPath $icon)) {
  throw "No se encontro el icono en $icon"
}

$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $target
$shortcut.WorkingDirectory = $appRoot
$shortcut.IconLocation = "$icon,0"
$shortcut.Description = "Abrir Control mensual DLV"
$shortcut.Save()

Write-Host "Acceso directo creado en el escritorio:"
Write-Host $shortcutPath
