const GAS_URL = "https://script.google.com/macros/s/AKfycbxdTGt1RZMlgE6IKsjzba-iuox_dfr-PMsac1fclag2IWfnV058RKVAMdNlC3ymMGZh/exec";

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

/**
 * Generic API Fetcher
 */
export async function fetchAPI(action: string, payload: any = {}): Promise<ApiResponse> {
  try {
    const url = new URL(GAS_URL);
    url.searchParams.append("action", action);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      // AppScript requires no-cors for direct POSTs without preflight options handling in some setups,
      // but usually fetching JSON requires CORS or a workaround. 
      // Next.js server actions handle this server-side avoiding CORS issues completely!
    });

    // Handle redirects from Google Apps Script (often redirects to a temp URL)
    if (response.redirected || !response.ok) {
        // AppScript POST returning JSON can be tricky. It often returns a redirect to a GET.
        // Doing this via Server Action avoids browser CORS.
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(`[API Error] action=${action}:`, error.message);
    return { success: false, message: "Network error or invalid server response" };
  }
}
