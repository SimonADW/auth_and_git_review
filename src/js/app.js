import { firebaseConfig } from "./firebaseConfig"

import { initializeApp } from "firebase/app"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"

initializeApp(firebaseConfig)

const authService = getAuth();

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const signInButton = document.querySelector(".sign-in-button");
const signOutButton = document.querySelector(".sign-out-button");
const signUpButton = document.querySelector(".sign-up-button");
const errorMessage = document.querySelector(".error-message");

const frontPage = document.querySelector(".front-page");
const secretSection = document.querySelector("secret-section");


signUpButton.addEventListener("click", (event)=> {
	event.preventDefault();
	createUserWithEmailAndPassword(authService, emailInput.ariaValueMax, passwordInput.value)
	.then(()=> {
		// Do someting
	})
	.catch((error)=> {
		errorMessage.style.display = "block";
		errorMessage.textContent = error.message
	})
})

signInButton.addEventListener("click", (event)=> {
	event.preventDefault();
})

signOutButton.addEventListener("click", ()=> {

})