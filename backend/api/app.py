import uvicorn
from starlette.applications import Starlette

from api import settings
from api.event_handlers import on_startup, on_shutdown
from api.exception_handlers import exception_handlers
from api.middleware import middleware
from api.routes import routes

app = Starlette(
    debug=settings.DEBUG,
    routes=routes,
    middleware=middleware,
    exception_handlers=exception_handlers,
    on_startup=on_startup,
    on_shutdown=on_shutdown,
)

if __name__ == "__main__":
    uvicorn.run(app)
