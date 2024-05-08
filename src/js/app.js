import { firebaseConfig } from "./firebaseConfig"

import { initializeApp } from "firebase/app"

import { getAuth } from "firebase/auth"

initializeApp(firebaseConfig)

const authService = getAuth();