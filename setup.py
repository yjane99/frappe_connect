from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in frappe_connect/__init__.py
from frappe_connect import __version__ as version

setup(
	name="frappe_connect",
	version=version,
	description="Instant messaging platform for professionals.",
	author="Frappe",
	author_email="yashjane99@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
