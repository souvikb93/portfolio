/**
 * How closely to follow the published site where it contradicts itself.
 *
 * Measured against souvikb.net, and re-checked against the duplicate pages the
 * project still publishes:
 *
 *   /projects/aero_check is NOT a defect. It carries a PitchHub / Google
 *   (Vertex AI) header deliberately — the study was reframed as the Google
 *   sales-enablement pilot, with Airbus diagram validation as one use case
 *   inside it, which is what its own summary says. /projects/aero_check-2
 *   publishes the identical header and body, confirming intent. Mirrored
 *   unconditionally; there is nothing to correct.
 *
 * Three genuine inconsistencies remain:
 *   1. /projects/desi_aroma carries that same PitchHub header above the
 *      Gandhinagar home-chef study — a header that does not belong to it.
 *   2. All three build cards print "Tracka", a Framer component default that
 *      was never overridden. The taglines beneath are correct and distinct.
 *   3. The home band and /projects print different copy for the same project
 *      ("AccessNow / Accessible Healthcare SaaS Product…" vs "Access Now /
 *      Accebility First Medicare Product"), and date Aero Check © 2024 on one
 *      surface and © 2025 on the other.
 *
 * MIRROR_LIVE = true   reproduce the published site exactly, including these.
 * MIRROR_LIVE = false  render the content they mask.
 *
 * Both states are complete and tested. This is the only switch between them.
 */
export const MIRROR_LIVE = true;
