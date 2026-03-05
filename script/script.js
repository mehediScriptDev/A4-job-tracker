let currentTab = 'all';



function updateCounts() {
  let interviewCount = 0;
  let rejectedCount = 0;

  const cards = [
    document.getElementById('card-1'),
    document.getElementById('card-2'),
    document.getElementById('card-3'),
    document.getElementById('card-4'),
    document.getElementById('card-5'),
    document.getElementById('card-6'),
    document.getElementById('card-7'),
    document.getElementById('card-8')
  ];

  let total = 0;
  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    if (!c) continue;
    if (c.dataset.deleted === 'true') continue;
    total++;
    if (c.dataset.status === 'interview') interviewCount++;
    if (c.dataset.status === 'rejected') rejectedCount++;
  }

  // update top stats and jobs count
  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = total;
  document.getElementById('interviewCount').textContent = interviewCount;
  document.getElementById('rejectedCount').textContent = rejectedCount;
  const jobsCountEl = document.getElementById('jobsCount');
  if (jobsCountEl) jobsCountEl.textContent = total + ' jobs';
}



function filterCards() {
  const allCards = [
    document.getElementById('card-1'),
    document.getElementById('card-2'),
    document.getElementById('card-3'),
    document.getElementById('card-4'),
    document.getElementById('card-5'),
    document.getElementById('card-6'),
    document.getElementById('card-7'),
    document.getElementById('card-8'),
  ];

  let visibleCount = 0;
  for (let i = 0; i < allCards.length; i++) {
    const card = allCards[i];
    if (!card) continue;
    if (card.dataset.deleted === 'true') { card.style.display = 'none'; continue; }
    const status = card.dataset.status; 

    if (currentTab === 'all') {
      card.style.display = '';           
    } else if (currentTab === 'interview') {
      card.style.display = (status === 'interview') ? '' : 'none';
    } else if (currentTab === 'rejected') {
      card.style.display = (status === 'rejected')  ? '' : 'none';
    }

    if (card.style.display !== 'none') visibleCount++;
  }

  const noJobsEl = document.getElementById('noJobs');
  if (noJobsEl) {
    if (visibleCount === 0) noJobsEl.style.display = '';
    else noJobsEl.style.display = 'none';
  }
}


// staus badge
function changeStatusBadge(cardNumber, newStatus) {
  const badge = document.getElementById('status-' + cardNumber); 

  if (newStatus === 'interview') {
    badge.textContent = 'Interview';
    badge.className   = 'btn status-btn bg-[#ECFDF5] text-[#065F46] px-5 uppercase border-none';
  }

  if (newStatus === 'rejected') {
    badge.textContent = 'Rejected';
    badge.className   = 'btn status-btn bg-[#FEF2F2] text-[#7F1D1D] px-5 uppercase border-none';
  }
}


// acitve tab logic
function setActiveTab(clickedTab) {
  const tabA = document.getElementById('tabAll');
  const tabI = document.getElementById('tabInterview');
  const tabR = document.getElementById('tabRejected');

  if (clickedTab === 'tabAll') {
    tabA.className = 'btn bg-[#3B82F6] border-transparent text-white px-5';
    tabI.className = 'btn border border-[#F1F2F4] bg-white text-[#64748B]';
    tabR.className = 'btn border border-[#F1F2F4] bg-white text-[#64748B]';
  } else if (clickedTab === 'tabInterview') {
    tabA.className = 'btn border border-[#F1F2F4] bg-white text-[#64748B] px-5';
    tabI.className = 'btn bg-[#3B82F6] border-transparent text-white';
    tabR.className = 'btn border border-[#F1F2F4] bg-white text-[#64748B]';
  } else if (clickedTab === 'tabRejected') {
    tabA.className = 'btn border border-[#F1F2F4] bg-white text-[#64748B] px-5';
    tabI.className = 'btn border border-[#F1F2F4] bg-white text-[#64748B]';
    tabR.className = 'btn bg-[#3B82F6] border-transparent text-white';
  }
}


// tabs
document.getElementById('tabAll').addEventListener('click', function () {
  currentTab = 'all';
  setActiveTab('tabAll');
  filterCards();
});

document.getElementById('tabInterview').addEventListener('click', function () {
  currentTab = 'interview';
  setActiveTab('tabInterview');
  filterCards();
});

document.getElementById('tabRejected').addEventListener('click', function () {
  currentTab = 'rejected';
  setActiveTab('tabRejected');
  filterCards();
});


// card1
document.getElementById('interview-1').addEventListener('click', function () {
  document.getElementById('card-1').dataset.status = 'interview';
  changeStatusBadge(1, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-1').addEventListener('click', function () {
  document.getElementById('card-1').dataset.status = 'rejected';
  changeStatusBadge(1, 'rejected');
  updateCounts();
  filterCards();
});

// delete card1
document.getElementById('delete-1').addEventListener('click', function () {
  const c = document.getElementById('card-1');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


// card2
document.getElementById('interview-2').addEventListener('click', function () {
  document.getElementById('card-2').dataset.status = 'interview';
  changeStatusBadge(2, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-2').addEventListener('click', function () {
  document.getElementById('card-2').dataset.status = 'rejected';
  changeStatusBadge(2, 'rejected');
  updateCounts();
  filterCards();
});

// delete card2
document.getElementById('delete-2').addEventListener('click', function () {
  const c = document.getElementById('card-2');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


// card3
document.getElementById('interview-3').addEventListener('click', function () {
  document.getElementById('card-3').dataset.status = 'interview';
  changeStatusBadge(3, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-3').addEventListener('click', function () {
  document.getElementById('card-3').dataset.status = 'rejected';
  changeStatusBadge(3, 'rejected');
  updateCounts();
  filterCards();
});

// delete card3
document.getElementById('delete-3').addEventListener('click', function () {
  const c = document.getElementById('card-3');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


// card4
document.getElementById('interview-4').addEventListener('click', function () {
  document.getElementById('card-4').dataset.status = 'interview';
  changeStatusBadge(4, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-4').addEventListener('click', function () {
  document.getElementById('card-4').dataset.status = 'rejected';
  changeStatusBadge(4, 'rejected');
  updateCounts();
  filterCards();
});

// delete card4
document.getElementById('delete-4').addEventListener('click', function () {
  const c = document.getElementById('card-4');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


// card5
document.getElementById('interview-5').addEventListener('click', function () {
  document.getElementById('card-5').dataset.status = 'interview';
  changeStatusBadge(5, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-5').addEventListener('click', function () {
  document.getElementById('card-5').dataset.status = 'rejected';
  changeStatusBadge(5, 'rejected');
  updateCounts();
  filterCards();
});

// delete card5
document.getElementById('delete-5').addEventListener('click', function () {
  const c = document.getElementById('card-5');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


// card6
document.getElementById('interview-6').addEventListener('click', function () {
  document.getElementById('card-6').dataset.status = 'interview';
  changeStatusBadge(6, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-6').addEventListener('click', function () {
  document.getElementById('card-6').dataset.status = 'rejected';
  changeStatusBadge(6, 'rejected');
  updateCounts();
  filterCards();
});

// delete card6
document.getElementById('delete-6').addEventListener('click', function () {
  const c = document.getElementById('card-6');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


// card7
document.getElementById('interview-7').addEventListener('click', function () {
  document.getElementById('card-7').dataset.status = 'interview';
  changeStatusBadge(7, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-7').addEventListener('click', function () {
  document.getElementById('card-7').dataset.status = 'rejected';
  changeStatusBadge(7, 'rejected');
  updateCounts();
  filterCards();
});

// delete card7
document.getElementById('delete-7').addEventListener('click', function () {
  const c = document.getElementById('card-7');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


// card8
document.getElementById('interview-8').addEventListener('click', function () {
  document.getElementById('card-8').dataset.status = 'interview';
  changeStatusBadge(8, 'interview');
  updateCounts();
  filterCards();
});

document.getElementById('reject-8').addEventListener('click', function () {
  document.getElementById('card-8').dataset.status = 'rejected';
  changeStatusBadge(8, 'rejected');
  updateCounts();
  filterCards();
});

// delete card8
document.getElementById('delete-8').addEventListener('click', function () {
  const c = document.getElementById('card-8');
  if (!c) return;
  c.dataset.deleted = 'true';
  c.style.display = 'none';
  updateCounts();
  filterCards();
});


updateCounts();
setActiveTab('tabAll');
filterCards();
