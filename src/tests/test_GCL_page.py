#!/usr/bin/env python

"""
test_GCL_page.py: Uses Selenium and Pytest to showcase testing automation.
"""

import time

from POMS.PagePOM import PagePOM

__author__ = "Ben Weese"
__copyright__ = "Copyright 2019, Python Automation"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Ben Weese"
__email__ = "ben@benweese.dev"
__status__ = "refactor"


def test_1(browser):
	"""
	This fills out the First form on the page and makes sure the date was entered.
	Then it will verify if the message was successfully sent.
	:param browser:
	"""
	page = PagePOM(browser)
	page.load()
	page.search_1('batman')
	assert page.get_search_1() == 'batman'
	browser.quit()


