# Control mensual DLV

App local para controlar disputas Uber por local, semana y mes.

## Como abrir la app

1. Descarga o clona este repositorio.
2. Abre el archivo `index.html` con Google Chrome, Microsoft Edge o Firefox.
3. Usa la app directamente desde el navegador.

No necesita instalar Node, Python, base de datos ni servidor.

## Uso diario

1. Selecciona el mes en el desplegable `Mes`.
2. Revisa que las semanas generadas sean correctas.
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

El archivo `planilla-control-dlv.xlsx` incluye una version Excel editable con hojas:

- `Resumen Mensual`
- `Carga Semanal`
- `Locales`
- `Parametros`

Sirve como respaldo formal o como alternativa para usuarios que prefieren Excel.

## Recomendaciones

- Exporta respaldo JSON al terminar cada mes.
- No borres datos del navegador sin antes exportar respaldo.
- Usa `Informe mensual` para enviar o imprimir resultados.
- Usa `Planilla Excel` cuando necesites trabajar fuera de la app.

