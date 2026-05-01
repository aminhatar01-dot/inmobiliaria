#!/bin/bash

# Script de optimización para VPS con poca RAM (1GB - 2GB)
# Diseñado para InmoCMS + Evolution API

echo "--- Iniciando optimización del sistema ---"

# 1. Verificar y Crear Swap si es necesario
if [ $(free -m | grep Swap | awk '{print $2}') -lt 1024 ]; then
    echo "Configurando SWAP de 2GB..."
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    echo "SWAP configurado exitosamente."
else
    echo "SWAP ya configurado."
fi

# 2. Ajustar Swappiness
echo "Ajustando swappiness..."
sudo sysctl vm.swappiness=10
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf

# 3. Limpiar memoria cache actual
sudo sync; sudo echo 3 > /proc/sys/vm/drop_caches

# 4. Reiniciar Docker con el nuevo archivo de configuración
echo "Reiniciando Evolution API con configuraciones optimizadas..."
# Asumimos que el usuario está en el directorio raíz del proyecto
docker compose -f docker-compose-evolution.yml down
docker compose -f docker-compose-evolution.yml up -d

echo "--- Optimización completada ---"
echo "Recuerda que Evolution API v2 requiere al menos 1GB de RAM libre para funcionar establemente con 1-2 instancias."
echo "Si el sistema sigue inestable, considera subir a un VPS de 4GB RAM."
