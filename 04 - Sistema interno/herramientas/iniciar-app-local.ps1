$ErrorActionPreference = "Stop"

$internalRoot = Split-Path -Parent $PSScriptRoot
$projectRoot = Split-Path -Parent $internalRoot
$port = 8765
$python = Get-Command python -ErrorAction SilentlyContinue

if (!$python) {
  Start-Process (Join-Path $projectRoot "Control mensual DLV.html")
  Write-Host "No se encontro Python. Se abrio la app directamente."
  exit 0
}

while ((Test-NetConnection -ComputerName 127.0.0.1 -Port $port -InformationLevel Quiet) -eq $true) {
  $port++
}

Start-Process -FilePath $python.Source -ArgumentList @("-m", "http.server", $port.ToString(), "-b", "127.0.0.1") -WorkingDirectory $projectRoot -WindowStyle Hidden
Start-Sleep -Seconds 1
Start-Process "http://127.0.0.1:$port/index.html"

Write-Host "Control mensual DLV iniciado en http://127.0.0.1:$port/index.html"
