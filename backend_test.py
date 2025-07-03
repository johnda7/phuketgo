#!/usr/bin/env python3
import requests
import json
import sys
import uuid
from datetime import datetime

# Use the REACT_APP_BACKEND_URL from frontend/.env
BACKEND_URL = "https://8552ca3b-03f2-4500-9512-5a278a0760ff.preview.emergentagent.com"
API_BASE_URL = f"{BACKEND_URL}/api"

def test_root_endpoint():
    """Test the root endpoint"""
    print("\n=== Testing Root Endpoint ===")
    try:
        response = requests.get(f"{API_BASE_URL}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert "message" in response.json(), "Response missing 'message' field"
        assert response.json()["message"] == "Hello World", f"Expected 'Hello World', got {response.json()['message']}"
        
        print("✅ Root endpoint test passed")
        return True
    except Exception as e:
        print(f"❌ Root endpoint test failed: {str(e)}")
        return False

def test_create_status_check():
    """Test creating a status check"""
    print("\n=== Testing Create Status Check ===")
    try:
        client_name = f"test_client_{uuid.uuid4()}"
        payload = {"client_name": client_name}
        
        response = requests.post(f"{API_BASE_URL}/status", json=payload)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert "id" in response.json(), "Response missing 'id' field"
        assert "client_name" in response.json(), "Response missing 'client_name' field"
        assert "timestamp" in response.json(), "Response missing 'timestamp' field"
        assert response.json()["client_name"] == client_name, f"Expected client_name '{client_name}', got {response.json()['client_name']}"
        
        print("✅ Create status check test passed")
        return True, client_name
    except Exception as e:
        print(f"❌ Create status check test failed: {str(e)}")
        return False, None

def test_get_status_checks(expected_client_name=None):
    """Test retrieving status checks"""
    print("\n=== Testing Get Status Checks ===")
    try:
        response = requests.get(f"{API_BASE_URL}/status")
        print(f"Status Code: {response.status_code}")
        print(f"Found {len(response.json())} status checks")
        
        assert response.status_code == 200, f"Expected status code 200, got {response.status_code}"
        assert isinstance(response.json(), list), "Expected a list response"
        
        if expected_client_name and response.json():
            # Check if our recently created status check is in the list
            client_names = [item["client_name"] for item in response.json()]
            assert expected_client_name in client_names, f"Recently created client '{expected_client_name}' not found in response"
            print(f"✅ Found recently created client '{expected_client_name}' in response")
        
        print("✅ Get status checks test passed")
        return True
    except Exception as e:
        print(f"❌ Get status checks test failed: {str(e)}")
        return False

def run_all_tests():
    """Run all tests and return overall status"""
    print(f"Testing backend API at {API_BASE_URL}")
    
    # Test root endpoint
    root_success = test_root_endpoint()
    
    # Test creating a status check
    create_success, client_name = test_create_status_check()
    
    # Test getting status checks
    get_success = test_get_status_checks(client_name if create_success else None)
    
    # Overall test result
    all_passed = root_success and create_success and get_success
    
    print("\n=== Test Summary ===")
    print(f"Root Endpoint: {'✅ Passed' if root_success else '❌ Failed'}")
    print(f"Create Status Check: {'✅ Passed' if create_success else '❌ Failed'}")
    print(f"Get Status Checks: {'✅ Passed' if get_success else '❌ Failed'}")
    print(f"\nOverall Result: {'✅ All tests passed' if all_passed else '❌ Some tests failed'}")
    
    return all_passed

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)