// logging_middleware/index.js

const API_URL = "http://4.224.186.213/evaluation-service/logs";

const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhZGl0aS5zaW5naF9jczIzQGdsYS5hYy5pbiIsImV4cCI6MTc4MTA3NTY1MCwiaWF0IjoxNzgxMDc0NzUwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOTgzMzhjYTUtMDQzOS00MjdjLWIwNDAtYmUzZDFkYmM2OTU4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYWRpdGkgcmF5IHNpbmdoIiwic3ViIjoiNzA2YTRlNzYtZDU2NC00ZDQzLTgxNmUtNTBhNThiZmFmOGQ4In0sImVtYWlsIjoiYWRpdGkuc2luZ2hfY3MyM0BnbGEuYWMuaW4iLCJuYW1lIjoiYWRpdGkgcmF5IHNpbmdoIiwicm9sbE5vIjoiMjMxNTAwMDA5NiIsImFjY2Vzc0NvZGUiOiJSUHNnWXQiLCJjbGllbnRJRCI6IjcwNmE0ZTc2LWQ1NjQtNGQ0My04MTZlLTUwYTU4YmZhZjhkOCIsImNsaWVudFNlY3JldCI6Im1KaEhneFFWcFpmRHBUcWIifQ.ebABwF1aVF6NOQUVC611_WKSr_2mvqkIh23y6Lgcv0I"; 

export const Log = async (stack, level, pkg, message) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${BEARER_TOKEN}`
      },
      body: JSON.stringify({
        stack: stack,        // forntend 
        level: level,      // debug, info, warn, error or fatal
        package: pkg,      // api, component, hook, page, etc.
        message: message   // my decription.....
      }) 
    });

    if (!response.ok) {
        console.error("Failed to send log to server. Status:", response.status);
    }
  } catch (error) {
    console.error("Logging middleware error:", error); 
  }
};

 
