using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/secure")]
public class SecureController : ControllerBase
{
    [Authorize] 
    [HttpGet("data")]
    public IActionResult GetSecureData()
    {
        return Ok(new { message = "Deze data is beveiligd met JWT!" });
    }
}
