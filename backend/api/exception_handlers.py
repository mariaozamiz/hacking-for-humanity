from starlette.exceptions import HTTPException
from starlette.responses import JSONResponse


async def http_exception(request, exc):
    return JSONResponse({"detail": exc.detail}, status_code=exc.status_code)


exception_handlers = {HTTPException: http_exception}
