document.getElementById('btnLuasSegitiga').addEventListener('click', function() {
    document.getElementById('luasSegitiga').style.display = 'block';
    document.getElementById('kelilingSegitiga').style.display = 'none';
});

document.getElementById('btnKelilingSegitiga').addEventListener('click', function() {
    document.getElementById('luasSegitiga').style.display = 'none';
    document.getElementById('kelilingSegitiga').style.display = 'block';
});

function hitungLuas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasilLuas').innerText = `L = 1/2 x ${alas} x ${tinggi} = ${luas}`;
}

function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);
    const keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('hasilKeliling').innerText = `K = ${sisi1} + ${sisi2} + ${sisi3} = ${keliling}`;
}
