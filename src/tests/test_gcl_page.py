#!/usr/bin/env python

"""
test_gcl_page.py: Uses Selenium and Pytest to test Girls Code Lincoln Site.
"""

from POMS.GCLPOM import GCLPOM
import urllib.parse

__author__ = "Ben Weese"
__copyright__ = "Copyright 2019, Girls Code Lincoln"
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Ben Weese"
__email__ = "ben@benweese.dev"
__status__ = "refactor"


# Funding
def test_shop(browser):
	"""
	This clicks the shop link and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_shop()
	assert browser.current_url == 'https://teespring.com/stores/girlscodelincoln'
	browser.quit()


def test_donate(browser):
	"""
	This clicks the donate link and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_donate()
	url = 'https://www.nfggive.com/guidestar/83-2522645'
	browser.quit()


# Joining
def test_join_workshop(browser):
	"""
	This clicks the join workshop button and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_join_workshop()
	url = 'https://www.eventbrite.com/e/create-your-own-interactive-storytelling-microsite-registration-66705821909'
	assert browser.current_url == url
	browser.quit()


def test_vol_info(browser):
	"""
	This clicks the information button and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_vol_info()
	url = page.get_url() + '/assets/pdf/GCL-Volunteer-Information.pdf'
	assert browser.current_url == url
	browser.quit()


def test_join_team(browser):
	"""
	This clicks the join team button and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_join_team()
	url = 'https://www.surveymonkey.com'
	assert url in browser.current_url
	browser.quit()


# Sponsors
def test_mentors_found(browser):
	"""
	This clicks the mentors sponsor and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_mentors_found()
	url = 'https://mentorsfound.com/'
	assert browser.current_url == url
	browser.quit()


def test_hudl(browser):
	"""
	This clicks the hudl sponsor and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_hudl()
	url = 'http://www.hudl.com/'
	assert browser.current_url == url
	browser.quit()


def test_assurity(browser):
	"""
	This clicks the assurity sponsor and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_assurity()
	url = 'https://www.assurity.com/'
	assert browser.current_url == url
	browser.quit()


# Partners
def test_launch_leadership(browser):
	"""
	This clicks the launch leadership partner and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_launch_leadership()
	url = 'https://www.launchleadership.org/'
	assert browser.current_url == url
	browser.quit()


def test_fuse_coworking(browser):
	"""
	This clicks the fuse coworking partner and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_fuse_coworking()
	url = 'https://www.fusecoworking.com/'
	assert browser.current_url == url
	browser.quit()


def test_make_shift_lincoln(browser):
	"""
	This clicks the make shift lincoln partner and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_make_shift_lincoln()
	url = 'http://makeshiftlincoln.org/'
	assert browser.current_url == url
	browser.quit()


def test_self_image_defined(browser):
	"""
	This clicks the self image defined partner and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_self_image_defined()
	url = 'https://www.selfimagedefined.org/'
	assert browser.current_url == url
	browser.quit()


def test_letura_idigima(browser):
	"""
	This clicks the letura idigima partner and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_letura_idigima()
	url = 'https://www.leturaidigima.com/'
	assert browser.current_url == url
	browser.quit()


def test_carlos_velasco_design(browser):
	"""
	This clicks the carlos velasco design partner and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_carlos_velasco_design()
	url = 'https://www.carlosvelascodesign.com/'
	assert browser.current_url == url
	browser.quit()


# Want to become a sponsor?
def test_donate_button(browser):
	"""
	This clicks the donate button and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_donate_button()
	url = page.get_url() + '/assets/pdf/GCL-Donation-Info.pdf'
	assert browser.current_url == url
	browser.quit()


# Social Media
def test_instagram(browser):
	"""
	This clicks the Instagram Logo and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_instagram()
	url = 'https://www.instagram.com/girlscodelincoln/'
	assert browser.current_url == url
	browser.quit()


def test_facebook(browser):
	"""
	This clicks the facebook logo and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_facebook()
	url = 'https://www.facebook.com/girlscodelincoln/'
	assert browser.current_url == url
	browser.quit()


def test_linked_in(browser):
	"""
	This clicks the Linked In logo and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_linked_in()
	url = 'https://www.linkedin.com/company/girlscodelincoln'
	url2 = urllib.parse.quote_plus(url)
	assert browser.current_url == url or url2 in browser.current_url
	browser.quit()


def test_youtube(browser):
	"""
	This clicks the youtube logo and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_youtube()
	url = 'https://www.youtube.com/channel/UCB1dk_q4VmA48RFak6vRINQ/'
	assert browser.current_url == url
	browser.quit()


def test_github(browser):
	"""
	This clicks the github logo and verifies you are taken to the correct page.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_github()
	url = 'https://github.com/GirlsCodeLincoln'
	assert browser.current_url == url
	browser.quit()


def test_name_blank(browser):
	"""
	Testing the name field is required and gives correct error
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.click_submit()
	assert page.name_error() == "Please fill out this field."


def test_name_entered(browser):
	"""
	Testing the name will not error when name is entered.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_name("Test")
	page.click_submit()
	assert page.name_error() == ""

def test_email_blank(browser):
	"""
	Testing the email field is required and gives correct error.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_name("Test")
	page.click_submit()
	assert page.email_error() == "Please fill out this field."


def test_email_invalid_1(browser):
	"""
	Testing the email needs to have content without @ and errors correctly.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_name("Test")
	page.test_email("test")
	page.click_submit()
	assert page.email_error() == "Please include an '@' in the email address. 'test' is missing an '@'."


def test_email_invalid_2(browser):
	"""
	Testing the email needs to have content with @ and errors correctly.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_name("Test")
	page.test_email("test@")
	page.click_submit()
	assert page.email_error() == "Please enter a part following '@'. 'test@' is incomplete."


def test_email_invalid_3(browser):
	"""
	Testing the email needs to have content with @ but needs something after . and errors correctly.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_name("Test")
	page.test_email("test@example.")
	page.click_submit()
	assert page.email_error() == "'.' is used at a wrong position in 'example.'."


def test_msg_blank(browser):
	"""
	Testing the message field is required and errors correctly.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_name("Test")
	page.test_email("test@example.com")
	page.click_submit()
	assert page.message_error() == "Please fill out this field."

def test_contact_form(browser):
	"""
	Testing that the message submits and doesn't take you to a new page.
	Message will not email or properly submit in local container.
	:param browser:
	"""
	page = GCLPOM(browser)
	page.load()
	page.test_name("Test")
	page.test_email("test@example.com")
	page.test_message('Test message please ignore')
	page.click_submit()
	assert browser.current_url == page.get_url() + "/"

