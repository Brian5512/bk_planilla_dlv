# Control mensual DLV

App local para controlar disputas Uber por local, semana y mes.

## Uso rapido

Abre `index.html` en el navegador. No necesita servidor, internet ni instalacion.

La app crea automaticamente las semanas del mes segun la fecha del sistema. El corte semanal sigue el formato de la planilla original: cada semana termina el viernes.

## Funciones principales

- Agregar locales.
- Crear o eliminar semanas.
- Deshacer eliminacion de locales o semanas.
- Seleccionar mes desde un desplegable.
- Guardar historico por mes en el navegador.
- Editar metricas por semana.
- Calcular automaticamente `Sin disputas`.
- Marcar cumplimiento cuando `Sin disputas` es menor o igual al limite configurado.
- Ver resumen mensual acumulado con totales y porcentajes.
- Ver alertas de cargas pendientes, locales sin datos e incumplimientos.
- Exportar respaldo JSON con todos los meses guardados.
- Importar respaldo JSON.
- Exportar informe mensual HTML bonito e imprimible.
- Exportar planilla `.xls` desde la app.

## Planilla complementaria

El archivo `planilla-control-dlv.xlsx` incluye una version Excel con hojas:

- `Resumen Mensual`
- `Carga Semanal`
- `Locales`
- `Parametros`

Sirve como respaldo editable o para trabajar fuera de la app.
