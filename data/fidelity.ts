/**
 * How closely to follow the published site where it contradicts itself.
 *
 * souvikb.net currently carries four defects, confirmed by measurement:
 *   1. /projects/aero_check and /projects/desi_aroma both render a
 *      "Reimagining Applications with AI / PitchHub / Google (Vertex AI)"
 *      header above unrelated study bodies, while /projects still lists both
 *      studies under their own names.
 *   2. All three build cards print the title "Tracka" — a Framer component
 *      default that was never overridden. The taglines beneath are correct.
 *   3. The home band and /projects print different copy for the same project
 *      ("AccessNow / Accessible Healthcare SaaS Product…" vs "Access Now /
 *      Accebility First Medicare Product").
 *   4. Aero Check is dated © 2024 on the home band and © 2025 on /projects.
 *
 * MIRROR_LIVE = true   reproduce the published site exactly, defects included.
 * MIRROR_LIVE = false  render the corrected content the defects were masking.
 *
 * Both states are complete and tested. This is the only switch between them.
 */
export const MIRROR_LIVE = true;
