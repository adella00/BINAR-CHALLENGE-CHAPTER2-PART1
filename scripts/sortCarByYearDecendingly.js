function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // looping untuk membandingkan tiap elemen
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      //memeriksa apakah elemen pertama lebih kecil dari elemen kedua
      if (result[j].year < result[j + 1].year) {
        // jika kondisi terpenuhi maka
        // tukar element dengan menyimpan nilai pertama di variabel sementara
        const temp = result[j];
        // mengganti elemen pertama menjadi element kedua
        result[j] = result[j + 1];
        // mengganti element kedua menjadi element pertama yang sebelumnya disimpan di variabel sementara
        result[j + 1] = temp;
      }
    }
  }
  // mencetak data yang sudah terurut
  console.log(result);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
