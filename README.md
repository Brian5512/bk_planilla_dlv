# Control mensual DLV

App local para controlar disputas Uber por local, semana y mes.

## Para usar sin saber de tecnologia

1. Abre la carpeta del proyecto.
2. Haz doble clic en `ABRIR Control mensual DLV.bat`.
3. Si Windows no permite abrirlo, haz doble clic en `Control mensual DLV.html`.
4. Para dejar un icono en el escritorio, ejecuta `Crear acceso directo.bat`.

No necesita instalar Node, base de datos ni programas especiales. Si el computador tiene Python, se abrira como app local en el navegador. Si no tiene Python, se abre igual como archivo HTML.

## Carpetas principales

```text
Control mensual DLV
|-- ABRIR Control mensual DLV.bat
|-- Control mensual DLV.html
|-- Crear acceso directo.bat
|-- LEEME - PRIMERO.txt
|-- index.html
|-- 01 - Abrir la app
|-- 02 - Manual y capturas
|-- 03 - Planilla Excel
`-- 04 - Sistema interno
```

- `ABRIR Control mensual DLV.bat`: opcion recomendada para abrir la app.
- `Control mensual DLV.html`: opcion directa, sin instalador.
- `Crear acceso directo.bat`: crea el acceso directo en el escritorio.
- `LEEME - PRIMERO.txt`: instrucciones cortas para usuarios finales.
- `01 - Abrir la app`: copias de accesos para abrir o crear el acceso directo.
- `02 - Manual y capturas`: guia de uso e imagenes de referencia.
- `03 - Planilla Excel`: planilla complementaria editable.
- `04 - Sistema interno`: archivos internos de la app. No es necesario tocarla.

## Capturas

![Resumen mensual](02%20-%20Manual%20y%20capturas/capturas/resumen-mensual.png)

![Carga semanal](02%20-%20Manual%20y%20capturas/capturas/carga-semanal.png)

## Uso diario

1. Selecciona el mes en el desplegable `Mes`.
2. Revisa las semanas generadas automaticamente.
3. En `Carga semanal`, selecciona la semana que quieres completar.
4. Ingresa por local:
   - `P. incorrectos`
   - `Dev. Uber`
   - `Disp. rechazadas`
   - `Disp. aprobada`
5. La app calcula automaticamente:
   - `Sin disputas`
   - `Cumple?`
   - resumen mensual
   - porcentaje mensual
   - alertas del mes

## Regla de cumplimiento

Un local cumple una semana cuando:

```text
Sin disputas <= Maximo sin disputar para cumplir
```

Por defecto, el maximo es `3`.

La formula usada es:

```text
Sin disputas = P. incorrectos - Dev. Uber - Disp. rechazadas - Disp. aprobada
```

## Datos y respaldos

Los datos se guardan localmente en el navegador de cada computador. Si otra persona abre la app en otro PC, tendra una base vacia hasta importar un respaldo.

Para mover datos entre computadores:

1. En el PC origen, pulsa `Exportar datos`.
2. Guarda el archivo `.json`.
3. En el PC destino, abre la app y pulsa `Importar datos`.
4. Selecciona el archivo `.json`.

## Exportaciones

- `Informe mensual`: descarga un HTML bonito e imprimible.
- `Planilla Excel`: descarga una planilla `.xls` generada desde la app.
- `Exportar datos`: descarga respaldo JSON con todos los meses guardados.

## Planilla complementaria

El archivo `03 - Planilla Excel/planilla-control-dlv.xlsx` incluye una version Excel editable con hojas:

- `Resumen Mensual`
- `Carga Semanal`
- `Locales`
- `Parametros`

Sirve como respaldo formal o como alternativa para usuarios que prefieren Excel.

## Entrega a cliente

Para entregar la app, comparte la carpeta completa `Control mensual DLV`. No borres la carpeta `04 - Sistema interno`, porque ahi estan los archivos que hacen funcionar la aplicacion.

Recomendaciones:

- Exporta respaldo JSON al terminar cada mes.
- No borres datos del navegador sin antes exportar respaldo.
- Usa `Informe mensual` para enviar o imprimir resultados.
- Usa `Planilla Excel` cuando necesites trabajar fuera de la app.
