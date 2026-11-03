# Issue para el repositorio del equipo 3 (publica Amaro desde su cuenta)

**Título:** [Taller] Integración de `<wc-register>` · Equipo 2

**Lo integramos en:** https://github.com/crismch004-max/app-lit-G2/blob/taller-integracion/src/views/integracion/integracion.js
**Commit usado:** 7ed9e9e

## Funcionó bien
- El evento `cafeRegister` llega al padre con los datos en `detail` y con `bubbles` y `composed`; lo escuchamos con `@cafeRegister` sin tocar su código (`src/views/home/register.js:193-209`).
- Los estilos están encapsulados con Shadow DOM y no se mezclaron con los de nuestra tabla.
- El componente se registra solo y no depende de otros archivos de su proyecto.

## Problema encontrado
- Registramos un café (Nombre "cristian", Región "ecuador", Precio 3,00, Cantidad 3) → el evento se emitió bien, pero los campos del formulario quedaron con los mismos valores → esperábamos que se limpiaran después de enviar (`src/views/home/register.js:193-209`).
- La etiqueta es `wc-register` y el evento `cafeRegister`; al integrarlo no fue evidente qué datos entran y qué datos salen, porque no hay documentación y `total` figura como propiedad (`src/views/home/register.js:4-12`) aunque se calcula sola (`:179-190`).

## Propuesta de mejora
- Reiniciar `nombre`, `origen`, `precio` y `cantidad` al final de `register()` para que el formulario quede listo para otro registro.
- Documentar en un comentario o en el README la propiedad de entrada, el evento y la forma del `detail`.
- Considerar una etiqueta más específica (por ejemplo `wc-cafe-register`) y un nombre de evento con guiones (`cafe-register`), para evitar choques con otros componentes.
- Eliminar los estilos sin uso (`.input-dinero`, `.simbolo-moneda`, `register.js:82-100`).

_Comentamos el componente, no a las personas. No hace falta responder este issue._
