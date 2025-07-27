import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, deleteDoc, collection, query, onSnapshot, serverTimestamp } from 'firebase/firestore';
... (shortened for brevity — the actual full code from the previous App.js block will be inserted here)
