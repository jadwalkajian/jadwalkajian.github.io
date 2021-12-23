$.getJSON('https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json', function(data){

    $.each(data, function(i, data){
        $('#daftar_menu').append(`
        <div class="col-md-6 col-lg-4 mb-1">
            <li class="nama_surat card ps-4 fs-4 shadow">
            ${data.number_of_surah}. ${data.name} / ${data.name_translations.ar}
                <audio controls>
                    <source src="${data.recitation}" type="audio/mpeg">
                </audio>
            </li>
        </div>`);

    });
});