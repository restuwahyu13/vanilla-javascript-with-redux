## Example Vanilla Javascript With Redux

**Berikut** adalah contoh  sederhana cara pengunaan dasar pada `Redux` untuk aplikasi `JavaScript` atau aplikasi yang bukan menggunakan `JavaScript`, semoga dengan adanya ini anda bisa memahami fungsi dari `Redux` itu sendiri, sebelum anda mengunakannya pada `React  Js Application` atau yang lainnya, disini saya menggunakan 2 cara yang berbeda yaitu:

*  **Yang pertama** saya menggunakan Redux Old Style dengan menggunakan package dari **redux**

*  **Yang kedua**  saya menggunakan Redux Modern Style dengan menggunakan package dari **redux toolkit**

### Penjelasan Apa itu Redux ? :

**Redux** adalah sebuah **Library JavaScript** untuk memanagement sebuah state pada sebuah aplikasi, jika aplikasi tersebut tidak lagi memungkinkan untuk memanagement sebuah state, jika aplikasi tersebut sudah semakin besar dan kompleks, maka dari itu kita sudah harus menggunakan **Redux** untuk memanagement state, agar lebih rapih dan terstruktur.

### Cara Menjalankan Aplikasi :

**Install** module terlebih dahulu sesuai dengan apa yang tertera di `package.json`, kemudian buka terminal dan silahkan ketikan `npm install` atau `yarn add`, setelah selesai menginstall module tersebut lalu silahkan jalankan dengan cara mengetikan `npm start` atau `yarn start`, ada baiknya sebelum anda menjalankan nya, silahkan ketikan `npm run build` atau `yarn run build` terlebih dahulu agar aplikasi bisa berjalan.

### Penjelasan Fungsi Pada Redux :

* **Action**  adalah sebuah tindakan untuk  mengirimkan sebuah muatan informasi dari aplikasi  menggunakan `store.dispatch()`

* **Reducers**  adalah sebuah keadaan suatu aplikasi itu akan berubah, sesuai response yang diberikan melalu store yang dikirimkan oleh **action**

* **Store** adalah tempat yang berisi untuk memanagement `state`, `reducer` dan `action` dari aplikasi

### Penjelasan Fungsi Method Pada Redux :

* **getState** berfungsi untuk mengakses sebuah nilai dari sebuah state 

* **dispatch** berfungsi untuk mengirimkan atau memperbarui sebuah state untuk mendapatkan sebuah nilai baru
* **subcribe**  berfungsi  sebagai sebuah pendengar jika terjadi suatu perubahan atau pembatalan pada sebuah state

* **combineReducers** berfungsi untuk mengabungkan banyak reducers menjadi satu, jika memiliki lebih dari satu reducers

*  **createStore** berfungsi untuk membuat sebuah store dan menjalankan sebuah reducers pada sebuah store

* **applyMiddleware** berfungsi untuk menjalankan sebuah module pihak ketiga pada sebuah aplikasi atau untuk menjalankan sebuah fungsi lain

* **replaceReducer** berfungsi untuk mengantikan sebuah reducers yang lama menjadi sebuah reducers baru