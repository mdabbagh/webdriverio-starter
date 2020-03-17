TEST_RESULTS_DIR=test-results
if [ -d "$TEST_RESULTS_DIR" ]; then
  echo "Removing test results directory"
  rm -rf test-results
fi