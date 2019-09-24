#!/usr/bin/env python

"""
GCLPOM.py: .
"""

from selenium.webdriver.common.by import By


__author__ = "Ben Weese"
__copyright__ = "Copyright 2019, Python Automation"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Ben Weese"
__email__ = "ben@benweese.dev"
__status__ = "refactor"


class PagePOM(object):
    """
    This is the Page Object Model used in test_forms_Page.py for the filling out forms section
    of Ultimate QA's Automation Exercises.
    """
    URL = 'https://localhost:8080'

    item_1 = (By.ID, 'itemID')
    item_2 = (By.CSS_SELECTOR, "#ID button.class")
    item_3 = (By.NAME, 'q')
    item_4 = (By.CLASS_NAME, 'class-name')

    def __init__(self, browser):
        self.browser = browser

    def load(self):
        self.browser.get(self.URL)

    def search_1(self, phrase):
        search_input = self.browser.find_element(*self.item_3)
        search_input.send_keys(phrase)

    def get_search_1(self):
        return self.browser.find_element(*self.item_3).get_attribute('value')
