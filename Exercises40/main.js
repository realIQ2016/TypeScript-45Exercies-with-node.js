//creating the make album function
function make_album(artis_name, album_title, tracks) {
    var album = {
        artist: artis_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//callin 3 funcation & creating 3 veriable
var album1 = make_album("Iqra", "album_title.1");
console.log(album1);
var album2 = make_album("Umaima", "like music");
console.log(album2);
var album3 = make_album("Ilsa", "album title 3", 10);
console.log(album3);
