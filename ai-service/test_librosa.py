import sys
import librosa
try:
    print(librosa.__version__)
    librosa.load('nonexistent.webm')
except Exception as e:
    print(f"Exception type: {type(e)}")
    print(f"Exception message: {e}")
