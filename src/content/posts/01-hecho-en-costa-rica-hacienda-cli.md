---
title: "🇨🇷 Hecho en Costa Rica: Hacienda CLI"
publishedAt: 2023-12-18
description: "🇨🇷 Hacienda es una aplicación que se conecta al API del Ministerio de Hacienda de Costa Rica."
slug: "hecho-en-costa-rica-hacienda-cli"
isPublish: true
---

[Hacienda CLI](https://kevinah95.github.io/hacienda) es una interfaz de línea de comandos que se conecta al API del Ministerio de Hacienda de Costa Rica.

Fue creada para darle más visibilidad a las implementaciones de los desarrollos creados en el país.

Es parte de un movimiento llamado **#HechoEnCostaRica 🇨🇷**.

La inspiración proviene de APIs publicados en [gometa.org](https://apis.gometa.org) y el [API](https://api.hacienda.go.cr/status) del Ministerio de Hacienda de Costa Rica.

![Ejemplo de Hacienda CLI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/17vmyhgf0utkwrcnyrap.gif)

---

## Historia

En Septiembre del año pasado, la empresa en la que me encontraba cerró 🥲, por todo el asunto de la pandemia. Entonces pasé un año sin trabajo. Gracias a Dios pude dar clases en la universidad y no saben lo que me fascina la enseñanza. Un sueño cumplido. Esto produjo un gran deseo de contribuír en a la comunidad.

De hecho, tuve la oportunidad de enseñar a jóvenes de la comunidad donde crecí, de mi barrio en Finca San Juan de Pavas. Le pedí a la directora (doña Yinnette Cháves) de la Biblioteca Carmen Lyra un espacio para dar clases de *Fundamentos de Programación*. La directora muy amable me brindó el espacio y en conjunto con la Municipalidad de San José, logramos certificar a los estudiantes en Python 🐍. *¡Fue un gran éxito!*

<figure>
  <img alt="Regalo de los estudiantes" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rjyjkdht8pbb5qg8u2ns.jpeg">
  <figcaption>Los estudiantes de la biblioteca me regalaron una alcancía muy similar a mí. Fue muy bonito.</figcaption>
</figure>

Siempre he deseado crear una [comunidad open source](https://opensource.guide/es/building-community). Y recuerdo hace mucho tiempo que empecé a leer sobre este nuevo mundo (para mí). De hecho, varios miembros de la comunidad en GitHub, escribieron las [Guías de código abierto](https://opensource.guide/es/) que *son una colección de recursos para individuos, comunidades y empresas que quieran aprender a dirigir y contribuir a un proyecto de código abierto*.

### ¿Cómo nace Hacienda CLI?

Al ser profesor universitario tuve que generar facturas con el facturador electrónico gratuito del Ministerio de Hacienda de Costa Rica. Es un poco complejo entrar en este mundo por cuenta propia (porque puedes contratar a un contador que te ayude en el tema). A la fecha he logrado realizar 12 facturas que es un buen logro. Tuve que hacer una nota de crédito porque los datos estaban mal 🥲, pero aprendí.

En este proceso me di cuenta que la Comunidad de Software Libre en Costa Rica (CRLibre) creó un [API abierto](https://crlibre.org/factura-electronica/) donde explican detalladamente el proceso de facturación, firma de documentos y flujos que se deben de seguir para implementar el API y conectarse con [Hacienda](https://www.hacienda.go.cr).

El asunto es que está escrito en PHP 🫠. Necesitaba comprender su uso y contrucción. Así es como llegué a [APIs gometa.org](https://apis.gometa.org) creado y mantenido por Moritz von Schweinitz ([GitHub](https://github.com/schweini), [LinkedIn](https://www.linkedin.com/in/moritz-von-schweinitz-79832086/)). Al estudiar estas APIs me llevaron al [API oficial de Hacienda](https://api.hacienda.go.cr/status).

En el status del API oficial de Hacienda se encuentra su [especificación](https://bit.ly/2McNcpX). Con esta especificación es que se contruye [Hacienda CLI](https://kevinah95.github.io/hacienda/). Este proyecto es parte de mi aprendizaje para [Go](https://go.dev).

### Lecciones aprendidas

- Este proyecto me enseño a estar más cerca de la comunidad [FLOSS](https://www.gnu.org/philosophy/floss-and-foss.en.html) (Free/Libre Open Source Software).
- Aprendí más sobre la importancia de: [README.md](https://opensource.guide/es/starting-a-project/#escribiendo-un-readme), [LICENSE](https://opensource.org/licenses/), [CONTRIBUTING.md](https://opensource.guide/es/starting-a-project/#escribiendo-las-pautas-para-contribuir) y [CODE_OF_CONDUCT.md](https://opensource.guide/es/starting-a-project/#estableciendo-un-c%C3%B3digo-de-conducta).
- Publicar en diferentes plataformas: MacOS 🍏, Linux 🐧, Windows 🪟.
- Utilizar [GitHub Action](https://github.com/kevinah95/hacienda/tree/main/.github/workflows) para los releases.

### ¿Qué usa Hacienda CLI?

- **[release-please](https://github.com/googleapis/release-please)** para automatizar la generación de versiones de acuerdo con [Commits Convencionales](https://www.conventionalcommits.org/es/v1.0.0/).
- **[GoReleaser](https://github.com/goreleaser/goreleaser)** para generar binarios Go de la forma más rápida y sencilla posible.
- **[Cosign](https://github.com/sigstore/cosign)** para firmar los archivos binarios.
- **[Material para MkDocs](https://squidfunk.github.io/mkdocs-material/)** para generar la página de documentación.
- **[Cobra](https://cobra.dev/)** Framework para crear aplicaciones CLI en Go.

— *[Kevin Hernández R](https://github.com/kevinah95).*

---

*Recuerda:*

- *No olvides seguir el Hashtag #HechoEnCostaRica.*
- *Deja una estrella en el [repositorio](https://github.com/kevinah95/hacienda) de Hacienda.*
- *Además, puedes seguirme en [GitHub](https://github.com/kevinah95), [Twitter](https://twitter.com/kevinah95), [LinkedIn](https://www.linkedin.com/in/kevinah95) o [Dribble](https://dribbble.com/kevinah95).*
