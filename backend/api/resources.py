from airtable import Airtable

from api import settings

challenges = Airtable(
    str(settings.AIRTABLE_BASE_KEY), "challenges", str(settings.AIRTABLE_API_KEY)
)
users = Airtable(
    str(settings.AIRTABLE_BASE_KEY), "users", str(settings.AIRTABLE_API_KEY)
)
challenge_subscribers = Airtable(
    str(settings.AIRTABLE_BASE_KEY),
    "challenge_subscribers",
    str(settings.AIRTABLE_API_KEY),
)
challenge_completers = Airtable(
    str(settings.AIRTABLE_BASE_KEY),
    "challenge_completers",
    str(settings.AIRTABLE_API_KEY),
)
