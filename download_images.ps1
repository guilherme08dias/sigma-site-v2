$urls = @{
    "controlid_idclass.png" = "https://www.controlid.com.br/storage/app/media/produtos/relogios-de-ponto/idclass/idclass-frente.png"
    "henry_superfacil.png" = "https://www.henry.com.br/wp-content/uploads/2020/09/sf.png"
    "catraca_facial.png" = "https://www.controlid.com.br/storage/app/media/produtos/catracas/idalui/idalui-frente.png"
}

foreach ($name in $urls.Keys) {
    try {
        Write-Host "Baixando $name..."
        Invoke-WebRequest -Uri $urls[$name] -OutFile "public/$name" -ErrorAction Stop
        Write-Host "Download de $name concluido."
    } catch {
        Write-Host "Falha ao baixar $name. Erro: $($_.Exception.Message)"
    }
}
