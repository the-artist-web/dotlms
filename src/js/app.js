"use strict";

/**
 * Import Modules
 */
import { Tooltip } from "./components/Tooltip.js";
import { FixedScrolling } from "./components/FixedScrolling.js";
import { Count } from "./components/Count.js";
import { Password } from "./components/Password.js";

/**
 * Fixed Scrolling
 */
const $fixedScrolling = document.querySelectorAll("[data-fixed-scrolling]");
if ($fixedScrolling.length) window.addEventListener("scroll", () => $fixedScrolling.forEach($elem => FixedScrolling($elem)));

/**
 * Tooltips
 */
const $tooltips = document.querySelectorAll("[data-bs-toggle='tooltip']");
if ($tooltips.length) $tooltips.forEach($elem => Tooltip($elem));

/**
 * Counters
 */
const $counts = document.querySelectorAll("[data-counts]");
if ($counts.length) $counts.forEach($elem => Count($elem));

/**
 * Password
 */
const $passwords = document.querySelectorAll("[data-passwords]");
if ($passwords.length) $passwords.forEach($elem => Password($elem));