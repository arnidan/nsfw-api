# NSFW API

[![build](https://github.com/arnidan/nsfw-api/actions/workflows/build.yml/badge.svg)](https://github.com/arnidan/nsfw-api/actions/workflows/build.yml)

Wrapper around [NSFWJS](https://github.com/infinitered/nsfwjs) to provide API.

## Usage

### Docker



### Manual deploy

1. Clone the repo
2. `yarn`
3. `yarn build`
4. `yarn start`

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
