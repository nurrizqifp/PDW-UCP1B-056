let members = JSON.parse(localStorage.getItem('techCommunityMembers')) || [
    { name: 'Andi Pratama', email: 'andi@tech.com', interest: 'Web Development' },
    { name: 'Siska Putri', email: 'siska@tech.com', interest: 'Cyber Security' }
];

const memberForm = document.getElementById('memberForm');
if (memberForm) {
    memberForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const interest = document.getElementById('userInterest').value;
        
        const newMember = { name, email, interest };
        members.push(newMember);
        localStorage.setItem('techCommunityMembers', JSON.stringify(members));
        
        alert('Data anggota ' + name + ' berhasil disimpan!');
        
        const contentResult = document.getElementById('contentResult');
        const displayArea = document.getElementById('displayArea');
        contentResult.innerHTML = `
            <div class="alert alert-info">
                <strong>Nama:</strong> ${name}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Minat:</strong> ${interest}
            </div>
        `;
        displayArea.classList.remove('d-none');
        this.reset();
    });
}

const memberTable = document.getElementById('memberTable');
if (memberTable) {
    memberTable.innerHTML = '';
    members.forEach(member => {
        const row = `<tr>
            <td>${member.name}</td>
            <td>${member.email}</td>
            <td>${member.interest}</td>
        </tr>`;
        memberTable.innerHTML += row;
    });
}

function changeImage() {
    const img = document.getElementById('techImg');
    if (img) img.src = 'https://picsum.photos/400/250?tech&t=' + new Date().getTime();
}

function controlAudio(action) {
    const audio = document.getElementById('audioPlayer');
    if (audio) {
        if (action === 'play') audio.play();
        else { audio.pause(); audio.currentTime = 0; }
    }
}