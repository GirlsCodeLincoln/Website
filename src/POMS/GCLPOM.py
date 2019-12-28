#!/usr/bin/env python

"""
gcl_pom.py: This is the Page Object Model this stores and uses the elements.
"""
from selenium.webdriver.common.by import By


__author__ = "Ben Weese"
__copyright__ = "Copyright 2019, Girls Code Lincoln"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Ben Weese"
__email__ = "ben@benweese.dev"
__status__ = "refactor"


class GCLPOM(object):
	"""
	This is the Page Object Model used in test_forms_Page.py for the filling out forms section
	of Ultimate QA's Automation Exercises.
	"""
	# Circle CI launches the HTML using Node so we can call Local host in the container.
	URL = 'http://localhost:8080'

	# Funding
	shop = (By.ID, 'shop')
	donate = (By.ID, 'donate')

	# Joining
	join_club = (By.ID, 'join-club')
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
		"""
		Initiates the Driver created in conftest.py
		:param browser:
		"""
		self.browser = browser

	def load(self):
		"""
		This opens the browser to the main page.
		"""
		self.browser.get(self.URL)

	def get_url(self):
		"""
		This returns the URL set at the beginning.
		:return: URL
		"""
		return self.URL

	# Funding
	def test_shop(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.shop)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_donate(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.donate)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	# Joining
	def test_join_club(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.join_club)
		element.click()
		if len(self.browser.window_handles) > 1:
			self.browser.switch_to.window(self.browser.window_handles[1])

	def test_vol_info(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.vol_info)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_join_team(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.join_team)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	# Sponsors
	def test_mentors_found(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.mentors_found)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_hudl(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.hudl)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_assurity(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.assurity)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	# Partners
	def test_launch_leadership(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.launch_leadership)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_fuse_coworking(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.fuse_coworking)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_make_shift_lincoln(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.make_shift_lincoln)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_self_image_defined(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.self_image_defined)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_letura_idigima(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.letura_idigima)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_carlos_velasco_design(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.carlos_velasco_design)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	# Want to be a sponsor?
	def test_donate_button(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.donate_button)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	# Social Media
	def test_instagram(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.instagram)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_facebook(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.facebook)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_linked_in(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.linked_in)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_youtube(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.youtube)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_github(self):
		"""
		Creates a web element for interacting.
		Clicks it.
		Then moves to the newly opened tab.
		"""
		element = self.browser.find_element(*self.github)
		element.click()
		self.browser.switch_to.window(self.browser.window_handles[1])

	def test_name(self, phrase):
		"""
		Creates a web element for interacting.
		Then sends the phrase to the element.
		:param phrase: "string"
		"""
		element = self.browser.find_element(*self.contact_name)
		element.send_keys(phrase)

	def test_email(self, phrase):
		"""
		Creates a web element for interacting.
		Then sends the phrase to the element.
		:param phrase: "string"
		"""
		element = self.browser.find_element(*self.contact_email)
		element.send_keys(phrase)

	def test_message(self, phrase):
		"""
		Creates a web element for interacting.
		Then sends the phrase to the element.
		:param phrase: "string"
		"""
		element = self.browser.find_element(*self.contact_message)
		element.send_keys(phrase)

	def click_submit(self):
		"""
		Creates a web element for interacting.
		Then submit button.
		"""
		element = self.browser.find_element(*self.contact_submit)
		element.click()

	def name_error(self):
		"""
		Creates a web element for interacting.
		Gets the error message from the element and
		:return error_msg: string error message
		"""
		element = self.browser.find_element(*self.contact_name)
		error_msg = element.get_attribute("validationMessage")
		return error_msg

	def email_error(self):
		"""
		Creates a web element for interacting.
		Gets the error message from the element and
		:return error_msg: string error message
		"""
		element = self.browser.find_element(*self.contact_email)
		error_msg = element.get_attribute("validationMessage")
		return error_msg

	def message_error(self):
		"""
		Creates a web element for interacting.
		Gets the error message from the element and
		:return error_msg: string error message
		"""
		element = self.browser.find_element(*self.contact_message)
		error_msg = element.get_attribute("validationMessage")
		return error_msg

