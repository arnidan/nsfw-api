# NSFW API

[![build](https://github.com/arnidan/nsfw-api/actions/workflows/build.yml/badge.svg)](https://github.com/arnidan/nsfw-api/actions/workflows/build.yml)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)

Wrapper around [NSFWJS](https://github.com/infinitered/nsfwjs) to provide API.

## Usage

### Docker

There are docker images bundled with models v3 from https://github.com/gantman/nsfw_model:

* `ghcr.io/arnidan/nsfw-api:latest` - bundled with TensorflowJS 299x299 Image Model (better detection, as for me)
* `ghcr.io/arnidan/nsfw-api:latest-min` - bundled with TensorflowJS Quantized 299x299 Image Model (see [#39](https://github.com/arnidan/nsfw-api/issues/49))

Each image is available for `linux/amd64` and `linux/arm64` platforms.

```
docker run -p 3000:3000 ghcr.io/arnidan/nsfw-api:latest
```

<details>
    <summary>docker-compose.yml example</summary>

```yaml
version: "3.9"

services:
  nsfw-api:
    image: "ghcr.io/arnidan/nsfw-api:latest"
    ports:
      - "3000:3000"
    restart: always
```

</details>

### Manual deploy

1. Clone the repo
2. Download and unpack model from [models repo](https://github.com/gantman/nsfw_model) to `model` folder
3. `yarn`
4. `yarn build`
5. `yarn start`

Now app started on port 3000.

## API Methods

- POST /classify
- POST /classify-many

### POST /classify

#### Example of the request

```http request
POST /classify HTTP/1.1
Content-Type: multipart/form-data
```

Image should be provided in `image` field.

#### Example of the response

```
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
{
    "porn": 0.59248286485672,
    "sexy": 0.39802199602127075,
    "hentai": 0.006243097595870495,
    "neutral": 0.0031403270550072193,
    "drawing": 0.00011181648733327165
}
```

### POST /classify-many

#### Example of the request

```http request
POST /classify-many HTTP/1.1
Content-Type: multipart/form-data
```

Images should be provided in `images` field.

#### Example of the response

```
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
[
    {
        "porn": 0.3996206820011139,
        "neutral": 0.388679563999176,
        "sexy": 0.19470958411693573,
        "hentai": 0.015063910745084286,
        "drawing": 0.001926235854625702
    },
    {
        "sexy": 0.8366416692733765,
        "porn": 0.13645528256893158,
        "neutral": 0.0222245492041111,
        "hentai": 0.004213324282318354,
        "drawing": 0.0004651622730307281
    },
    {
        "sexy": 0.8017168045043945,
        "porn": 0.1770564466714859,
        "neutral": 0.015829339623451233,
        "hentai": 0.005097625777125359,
        "drawing": 0.00029983260901644826
    }
]
```
