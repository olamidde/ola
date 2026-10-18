// Feature gates for the site.
//
// ONE_PAGER_ENABLED controls whether the root route renders the prototype
// single-page version of the site. It is ON by default; set the env var
// NEXT_PUBLIC_ONE_PAGER=false to fall back to the classic multi-section site.
export const ONE_PAGER_ENABLED =
  process.env.NEXT_PUBLIC_ONE_PAGER !== "false";
