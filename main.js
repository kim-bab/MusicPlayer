const audioList = [
  {
    id: 'music0',
    title: 'hope 90 bpm',
    singer: 'Lite Saturation',
    src: 'https://images.unsplash.com/photo-1594201302135-44123fc25795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    audio: 'hope-90-bpm-13970'
  },
  {
    id: 'music1',
    title: 'life like',
    singer: 'Alexi Action',
    src: 'https://images.unsplash.com/photo-1595204930135-f9d0e62644dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    audio: 'lifelike-126735'
  },
  {
    id: 'music2',
    title: 'Lofi Lofi Dem Bucks',
    singer: 'Brentin Davis',
    src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80',
    audio: 'lofi-lofi-dem-bucks-113748'
  },
  {
    id: 'music3',
    title: 'Timeless Love Songs',
    singer: 'Relaxing Ambiance',
    src: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    audio: 'timeless-love-songs-139541'
  },
  {
    id: 'music4',
    title: 'Weeknds',
    singer: 'DayFox',
    src: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    audio: 'weeknds-122592'
  },
  {
    id: 'music5',
    title: 'Twisted',
    singer: 'Gvidon',
    src: 'https://images.unsplash.com/photo-1548811579-017cf2a4268b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
    audio: 'twisted-138700'
  },
  {
    id: 'music6',
    title: 'Upbeat Future Bass',
    singer: 'Alex Kizenkov',
    src: 'https://images.unsplash.com/photo-1594845281364-63dbe90f37f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    audio: 'upbeat-future-bass-141195'
  },
  {
    id: 'music7',
    title: 'Good Vibes',
    singer: 'Alexi Action',
    src: 'https://images.unsplash.com/photo-1536849460588-696219a9e98d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80',
    audio: 'good-vibes-127577'
  },
  {
    id: 'music8',
    title: 'Funky Percussions',
    singer: 'Audio Coffee',
    src: 'https://images.unsplash.com/photo-1604367233962-bce0799fbe9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    audio: 'funky-percussions-135534'
  },
  {
    id: 'music9',
    title: 'Summer Nights (Tropical House Music)',
    singer: 'Music Unlimited',
    src: 'https://images.unsplash.com/photo-1486246772917-8947d0f7f541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    audio: 'summer-nights-tropical-house-music-121570'
  },
]




const mainWrap = document.querySelector('.content-wrap');
const musicListBtn = document.querySelector('.list-btn');
const contentWrap = document.querySelector('.inner-content');
const listWrap = document.querySelector('.list-wrap');
const audio = document.querySelector('#main-audio');

const hiddenList = document.querySelector('.inner-list-wrap');

const mainMusicTitle = document.querySelector('.title h3');
const mainMusicSinger = document.querySelector('.title p');
const mainMusicImg = document.querySelector('.img img');
const mainMusicAudio = document.querySelector('#main-audio');

const progressBar = document.querySelector('.progress');
const bar = document.querySelector('.bar');
const durationTimer = document.querySelector('.end');
const currentTimer = document.querySelector('.current');

const controlBtn = document.querySelectorAll('.control-btn li');
const playBtn = document.querySelector('.play-btn');

const repeatBtn = document.querySelector('.repeat-btn');
const getDuration = document.querySelector('#main-audio');

let musicIndex = Math.floor(Math.random() * audioList.length);

function render(musicIndex) {
  mainMusicTitle.textContent = `${audioList[musicIndex].title}`;
  mainMusicSinger.textContent = `${audioList[musicIndex].singer}`;
  mainMusicImg.src = `${audioList[musicIndex].src}.jpg`;
  mainMusicAudio.src = `audio/${audioList[musicIndex].audio}.mp3`;

  getDuration.addEventListener('loadeddata', () => {
    let getDurationList = getDuration.duration;

    const durationMin = Math.floor(getDurationList / 60);
    const durationSec = Math.floor(getDurationList % 60) < 10 ? '0' + Math.floor(getDurationList % 60) : Math.floor(getDurationList % 60);

    durationTimer.innerHTML = `${durationMin}:${durationSec}`;
  })
}

render(musicIndex);


musicListBtn.addEventListener('click', () => {
  listWrap.classList.add('show');
  document.querySelector('.bg').classList.add('bg-show');
})

document.querySelector('.bg').addEventListener('click', () => {
  document.querySelector('.bg').classList.remove('bg-show');
  listWrap.classList.remove('show');
})


audio.addEventListener('timeupdate', (e) => {

  const currentTime = e.target.currentTime;
  const duration = Math.round(e.target.duration);

  let barWidth = (currentTime / duration) * 100;

  bar.style.width = `${barWidth}%`;

  const currentMin = Math.floor(currentTime / 60);
  const currentSec = Math.floor(currentTime % 60) < 10 ? '0' + Math.floor(currentTime % 60) : Math.floor(currentTime % 60);

  currentTimer.innerHTML = `${currentMin}:${currentSec}`;

  const durationMin = Math.floor(duration / 60);
  const durationSec = Math.floor(duration % 60) < 10 ? '0' + Math.floor(duration % 60) : Math.floor(duration % 60);

  durationTimer.innerHTML = `${durationMin}:${durationSec}`;

  if (currentTime >= duration) {
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
    playBtn.setAttribute('class', 'play-btn');
    resetBar();
    playingNowCheck();
  }
})


controlBtn.forEach((items) => {
  items.addEventListener('click', (e) => {
    let targetItem = e.currentTarget;

    if (targetItem.className === 'next-btn') {
      nextState();
    }

    else if (targetItem.className === 'pre-btn') {
      musicIndex--;
      if (musicIndex < 0) {
        musicIndex = audioList.length - 1;
      }
      render(musicIndex);
      playState();
    }

    else if (targetItem.className === 'play-btn') {
      playState();

    }

    else if (targetItem.className === 'pause-btn') {
      pauseState();
    }
  })
})

const playState = () => {
  audio.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'
  playBtn.setAttribute('class', 'pause-btn');
  playingNowCheck();
  mainMusicImg.classList.add('imgRotate');
}

const pauseState = () => {
  audio.pause();
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>'
  playBtn.setAttribute('class', 'play-btn');
  mainMusicImg.classList.remove('imgRotate');
}

const nextState = () => {
  musicIndex++;
  if (musicIndex == audioList.length) {
    musicIndex = 0;
  }
  render(musicIndex);
  playState();
}

const hiddenMusicList = () => {

  let result = '';

  audioList.map((items, index) => {


    result += `<div class="music-list" data-index="${index}">
    <div class="list-title">
    <h3>${items.title}</h3>
    <p>${items.singer}</p>
    <audio id="main-audio" class="${items.id}">
    <source src="audio/${items.audio}.mp3">
    </audio>
    </div>
    <div class="list-timer" id="${items.id}"></div>
    </div>`;

    hiddenList.innerHTML = result;


    let audioID = document.querySelector(`.${items.id}`);
    let durationResult = '';

    audioID.addEventListener('loadeddata', () => {
      let timerID = document.querySelectorAll(`#${items.id}`);

      let getDurationList = audioID.duration;
      const durationMin = Math.floor(getDurationList / 60);
      const durationSec = Math.floor(getDurationList % 60) < 10 ? '0' + Math.floor(getDurationList % 60) : Math.floor(getDurationList % 60);

      timerID.forEach((items) => {
        durationResult += `${durationMin}:${durationSec}`
        items.textContent = durationResult;

      })

    })
  })
}

hiddenMusicList();


const allLiTags = document.querySelectorAll('.music-list');

const playingNowCheck = () => {
  allLiTags.forEach((items) => {
    if (items.classList.contains('playing')) {
      items.classList.remove('playing');
    }
    if (items.getAttribute('data-index') == musicIndex) {
      items.classList.add('playing');
    }
  })
}
playingNowCheck();


allLiTags.forEach((items) => {
  items.addEventListener('click', () => {
    let getMusic = items.getAttribute('data-index');
    musicIndex = getMusic;

    render(musicIndex);
    playState();

    if (items.getAttribute('data-index') == musicIndex) {
      items.classList.add('playing');
    }
  })
})



const resetBar = () => {
  bar.style.width = 0;
  currentTimer.textContent = `0:00`;
}

progressBar.addEventListener('click', (e) => {
  let widthBar = progressBar.clientWidth;
  let currentClick = e.offsetX;
  let durationSong = audio.duration;

  audio.currentTime = (currentClick / widthBar) * durationSong;
})


repeatBtn.addEventListener('click', (e) => {
  let choice = e.currentTarget.className;
  console.log(choice);
  switch (choice) {
    case 'repeat-btn':
      repeatBtn.setAttribute('class', 'repeat-one-btn');
      repeatBtn.innerHTML = '<i class="fa-solid fa-1"></i>';
      break;
    case 'repeat-one-btn':
      repeatBtn.setAttribute('class', 'shuffle-btn');
      repeatBtn.innerHTML = '<i class="fa-solid fa-shuffle"></i>';
      break;
    case 'shuffle-btn':
      repeatBtn.setAttribute('class', 'repeat-btn');
      repeatBtn.innerHTML = '<i class="fa-solid fa-repeat"></i>';
      break;
  }
})

audio.addEventListener('ended', () => {
  let getRepeatState = repeatBtn.className;

  switch (getRepeatState) {
    case 'repeat-btn':
      nextState();
      break;
    case 'repeat-one-btn':
      audio.currentTime = 0;
      playState();
      break;
    case 'shuffle-btn':
      let radomIndex = Math.floor(Math.random() * audioList.length);

      if (musicIndex == radomIndex) {
        radomIndex = Math.floor(Math.random() * audioList.length);
      }
      musicIndex = radomIndex;
      render(radomIndex);
      playState();
      playingNowCheck();
      break;
  }
  playingNowCheck();
})


