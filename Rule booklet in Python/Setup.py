"""In the case that the Setup.py file fails to execute, please manually install the following packages,
    or execute the requirements.sh script."""
#      Installing Requirements:                                #
#        pip install git+https://github.com/pwaller/pyfiglet   #
#        pip install colorama                                  #
#        pip install termcolor                                 #
#        pip install blessings                                  #

from distutils.core import setup

      setup(name='DPS East Hackathon Rule booklet.',
      version='1.0',
      description='DPS East Hackathon Rule booklet.',
      author='thel3l',
      author_email='i.rithwik@protonmail.com',
      url='https://www.github.com/thel3l/hackathon-dpse',
      packages=['distutils', 'distutils.command', 'pyfiglet', 'colorama', 'termcolor', 'blessings'],
     )
