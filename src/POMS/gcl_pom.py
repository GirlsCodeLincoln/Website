#!/usr/bin/env python

"""
gcl_pom.py: .
"""

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


__author__ = "Ben Weese"
__copyright__ = "Copyright 2019, Python Automation"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Ben Weese"
__email__ = "ben@benweese.dev"
__status__ = "refactor"


class gcl_pom(object):
	"""
	This is the Page Object Model used in test_forms_Page.py for the filling out forms section
	of Ultimate QA's Automation Exercises.
	"""
	URL = 'https://localhost:8080'

	# Funding
	shop = (By.ID, 'shop')
	donate = (By.ID, 'donate')

	# Joining
	join_workshop = (By.ID, 'storytelling')
	vol_info = (By.ID, 'volunteerInfo')
	join_team = (By.ID, 'joinTeam')

	# Sponsors
	mentors_found = (By.ID, 'mentorsfound')
	hudl = (By.ID, 'hudl')
	assurity = (By.ID, 'assurity')

	# Partners
	launch_leadership = (By.ID, 'launchleadership')
	fuse_coworking = (By.ID, 'fusecoworking')
	make_shift_lincoln = (By.ID, 'makeshiftlincoln')
	self_image_defined = (By.ID, 'selfimagedefined')
	letura_idigima = (By.ID, 'leturaidigima')
	carlos_velasco_design = (By.ID, 'carlosvelascodesign')

	# Donate Button
	donate_button = (By.ID, 'donatebutton')

	# Contact Form
	contact_name = (By.NAME, 'name')
	contact_email = (By.NAME, 'email')
	contact_message = (By.NAME, 'message')
	contact_submit = (By.NAME, 'submit')

	# Social Media Links
	instagram = (By.ID, 'instagram')
	facebook = (By.ID, 'facebook')
	linked_in = (By.ID, 'linkedin')
	youtube = (By.ID, 'youtube')
	github = (By.ID, 'github')

	def __init__(self, browser):
		self.browser = browser

	def load(self):
		self.browser.get(self.URL)

	# Funding
	def test_shop(self):
		element = self.browser.find_element(*self.shop)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_donate(self):
		element = self.browser.find_element(*self.donate)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	# Joining
	def test_join_workshop(self):
		element = self.browser.find_element(*self.join_workshop)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_vol_info(self):
		element = self.browser.find_element(*self.join_workshop)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_join_team(self):
		element = self.browser.find_element(*self.join_team)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	# Sponsors
	def test_mentors_found(self):
		element = self.browser.find_element(*self.mentors_found)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_hudl(self):
		element = self.browser.find_element(*self.hudl)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_assurity(self):
		element = self.browser.find_element(*self.assurity)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	# Partners
	def test_launch_leadership(self):
		element = self.browser.find_element(*self.launch_leadership)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_fuse_coworking(self):
		element = self.browser.find_element(*self.fuse_coworking)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_make_shift_lincoln(self):
		element = self.browser.find_element(*self.make_shift_lincoln)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_self_image_defined(self):
		element = self.browser.find_element(*self.self_image_defined)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_letura_idigima(self):
		element = self.browser.find_element(*self.letura_idigima)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_carlos_velasco_design(self):
		element = self.browser.find_element(*self.carlos_velasco_design)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	# Want to be a sponsor?
	def test_donate_button(self):
		element = self.browser.find_element(*self.donate_button)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	# Social Media
	def test_instagram(self):
		element = self.browser.find_element(*self.instagram)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_facebook(self):
		element = self.browser.find_element(*self.facebook)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_linked_in(self):
		element = self.browser.find_element(*self.linked_in)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_youtube(self):
		element = self.browser.find_element(*self.youtube)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_github(self):
		element = self.browser.find_element(*self.github)
		element.click()
		self.browser.find_element_by_tag_name('body').send_keys(Keys.CONTROL + Keys.TAB)

	def test_name(self, phrase):
		element = self.browser.find_element(*self.contact_name)
		element.send_keys(phrase)

	def test_email(self, phrase):
		element = self.browser.find_element(*self.contact_email)
		element.send_keys(phrase)

	def test_message(self, phrase):
		element = self.browser.find_element(*self.contact_message)
		element.send_keys(phrase)

	def test_submit(self):
		element = self.browser.find_element(*self.contact_submit)
		element.click()

