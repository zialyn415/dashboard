var user = {
	name: "Krizia Limpin",
	image: "img/krizia.png",
	progress: 0.77
}

var courseArr = [{
		title: "Readings in World Literature",
		subject: "Social Studies"
	}, {
		title: "Theory of Numbers",
		subject: "Mathematics"
	}, {
		title: "Sarcasm 101",
		subject: "Languages"
	}];

var activityArr = [{
		title: "Completed SOSC 503 Module 7 Quiz",
		subject: "Submitted for review 6/11/18 at 10:39PM"
	}, {
		title: "Commented in MATH104 Tuesday Discussion Group",
		subject: "Lorem ipsum dolores sit..."
	}, {
		title: "Enrolled in Sarcasm101",
		subject: "Cohort begins 9/08/18"
	}];

var accountArr = [{
		title: "Enrolled since: ",
		subject: "9/06/2017"
	}, {
		title: "Enrollment Status: ",
		subject: "Active Student"
	}, {
		title: "Department",
		subject: "Computer Science"
	}];

function setUser(user, image, name, id) {
	image.src = user.image;
	image.alt = user.name;
	name.innerText = user.name;
	id.innerText = "User #: " + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10); 
}
setUser(user, document.getElementById("userImg"), document.getElementById("username"), document.getElementById("userId"));

function formatTime(time) {
	if(time < 10) {
		return "0" + time;
	} else {
		return time;
	}
}

function getTime() {
	var now = new Date();
	var hours = formatTime(now.getHours());
	var minutes = formatTime(now.getMinutes());
	var seconds = formatTime(now.getSeconds());
	var month = formatTime(now.getMonth() + 1);
	var date = formatTime(now.getDate());
	var year = now.getFullYear() - 2000;
	return month + "/" + date + "/" + year + "   |   " + hours + ":" + minutes + ":" + seconds
}

function setTime(el) {
	el.style.whiteSpace = "pre"
	el.innerText = getTime();
	var elem = el;
	setTimeout(function() {
		return setTime(elem);
	}, 1000)
}
setTime(document.getElementById("time"));

function setActive(arr, title, list, str) {
	title.innerText = str
	list.innerHTML = "";
	for(var i = 0; i < arr.length; i++) {
		list.innerHTML += "<li><h4>" + arr[i].title + "</h4><p>" + arr[i].subject + "</p></li>"
	}
}
setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ")

function setProgress(user, bar, percent) {
	bar.style.width = user.progress * 100 + "%";
	percent.innerText = user.progress * 100 + "%";
}
setProgress(user, document.getElementById("progress-inner"), document.getElementById("progress-percent"))

// the impure functions
function showCourses() {
	setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ")
}
function showActivity() {
	setActive(activityArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Recent Activity: ")	
}
function showAccount() {
	setActive(accountArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Account: ")	
}
function expandMenu() {
	if(document.getElementsByTagName("main")[0].style.width) {
		document.getElementsByTagName("main")[0].style = "";
		document.getElementsByTagName("nav")[0].className = "";
	} else {
		document.getElementsByTagName("main")[0].style = "padding: 30px 5vw;; width: 75vw";
		document.getElementsByTagName("nav")[0].className = "open";
	}
}