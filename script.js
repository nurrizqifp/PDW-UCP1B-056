const memberData = [];

const memberForm = document.getElementById('memberForm');
if (memberForm) {
    memberForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const interest = document.getElementById('userInterest').value;
        
        const newMember = { name, email, interest };
        memberData.push(newMember);
        
        alert('Data anggota baru ' + name + ' telah disimpan!');
        
        const contentResult = document.getElementById('contentResult');
        const displayArea = document.getElementById('displayArea');
        
        contentResult.innerHTML = `
            <div class="alert alert-success">
                <p class="mb-1"><strong>Nama:</strong> ${name}</p>
                <p class="mb-1"><strong>Email:</strong> ${email}</p>
                <p class="mb-0"><strong>Minat:</strong> ${interest}</p>
            </div>
        `;
        displayArea.classList.remove('d-none');
        
        this.reset();
    });
}

function changeImage() {
    const img = document.getElementById('techImg');
    if (img) {
        img.src = 'https://picsum.photos/400/250?tech&sig=' + Math.random();
    }
}

function controlAudio(action) {
    const audio = document.getElementById('audioPlayer');
    if (audio) {
        if (action === 'play') {
            audio.play();
        } else if (action === 'pause') {
            audio.pause();
            audio.currentTime = 0;
        }
    }
}

function showVideoInfo() {
    alert('Video: Dokumentasi Kegiatan Belajar Tech Community 2026');
}