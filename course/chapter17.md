# Chapitre 17 : Promesses

## Concept



##

```js
var picturesPromise = $.getJSON({ url: "http://studybyyourself.com/wp-admin/admin-ajax.php?action=get_pictures" });
picturesPromise
  .then( (response) => {
        console.log(response);
    }
});
/*
{"success":true,"data":[{"id":6761,"filename":"miley_cyrus.jpg","url":"http:\/\/studybyyourself.com\/wp-content\/uploads\/2016\/11\/miley_cyrus.jpg","date":1478678648000,"mime":"image\/jpeg","type":"image","subtype":"jpeg","filesizeInBytes":16655,"filesizeHumanReadable":"16 KB"}]
*/
```
