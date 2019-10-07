#!/usr/bin/env python

"""
conftest.py: Configures the chrome browser for use.
"""

import os

import pytest
from selenium.webdriver import Chrome, Safari
from selenium.webdriver.chrome.options import Options

__author__ = "Ben Weese"
__copyright__ = "Copyright 2019, Girls Code Lincoln"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Ben Weese"
__email__ = "ben@benweese.dev"
__status__ = "refactor"


@pytest.fixture
def browser():
	"""
	Configures the chrome browser for use.
	"""
	chrome_options = Options()
	chrome_options.add_argument("--no-sandbox")
	chrome_options.add_argument("--disable-gpu")
	chrome_options.add_argument("--window-size=1400x1200")
	chrome_options.add_argument("--disable-extensions")

	# Gets and stores the working directory file path.
	path = os.getcwd()
	# sees if it is being ran buy Circle CI and uses a linux driver.
	if path == "/home/circleci/project":
		chrome_options.add_argument("--headless")
		driver = Chrome(executable_path=path + '/chromedriver_linux', options=chrome_options)
	# This checks if it is being ran by GitHub and if so it is being ran on a mac and against Safari.
	elif path == "/root/project":
		driver = Safari()
	# It assumes it is being run on a users Mac with Chrome 77.
	else:
		driver = Chrome(executable_path=path + '/chromedriver', options=chrome_options)
	driver.implicitly_wait(10)
	yield driver
	driver.quit()
