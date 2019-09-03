﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class RobotFreeAnim : MonoBehaviour {

	Vector3 rot = Vector3.zero;
	float rotSpeed = 40f;
    public GameObject robot;
    public GameObject walkText;
    Text walktext;
    Animator anim;
    bool walk = false;
	// Use this for initialization
	void Awake()
	{
		anim = robot.GetComponent<Animator>();
        walktext = walkText.GetComponent<Text>();
		gameObject.transform.eulerAngles = rot;
	}

	// Update is called once per frame
	void Update()
	{
		//CheckKey();
		gameObject.transform.eulerAngles = rot;
	}

    // Walk
    public void GetKeyWalk()
    {
        Debug.Log(walk);
        if (walk)
        {
            Debug.log("Walking");
            walk = false;
            walktext.text = "Walk";
            anim.SetBool("Walk_Anim", true);
        }
        else
        {
            Debug.log("Not walking");
            walk = true;
            walktext.text = "Stop";
            anim.SetBool("Walk_Anim", false);
        }      
    }
 
    // Rotate Left
    public void GetKeyLeft()
    {
        rot[1] -= rotSpeed * Time.fixedDeltaTime;
    }
    // Rotate Right
    public void GetKeyRight()
    {
        rot[1] += rotSpeed * Time.fixedDeltaTime;
    }

    public void GetKeyDownRoll()
    {
        if (anim.GetBool("Roll_Anim"))
        {
            anim.SetBool("Roll_Anim", false);
        }
        else
        {
            anim.SetBool("Roll_Anim", true);
        }
    }

    //close
    public void GetKeyDownClose()
    {       
        if (!anim.GetBool("Open_Anim"))
        {
            anim.SetBool("Open_Anim", true);
        }
        else
        {
            anim.SetBool("Open_Anim", false);
        }       
    }

    
    void CheckKey()
	{
		// Walk
		if (Input.GetKey(KeyCode.W))
		{
			anim.SetBool("Walk_Anim", true);
		}
		else if (Input.GetKeyUp(KeyCode.W))
		{
			anim.SetBool("Walk_Anim", false);
		}

		// Rotate Left
		if (Input.GetKey(KeyCode.A))
		{
			rot[1] -= rotSpeed * Time.fixedDeltaTime;
		}

		// Rotate Right
		if (Input.GetKey(KeyCode.D))
		{
			rot[1] += rotSpeed * Time.fixedDeltaTime;
		}

		// Roll
		if (Input.GetKeyDown(KeyCode.Space))
		{
			if (anim.GetBool("Roll_Anim"))
			{
				anim.SetBool("Roll_Anim", false);
			}
			else
			{
				anim.SetBool("Roll_Anim", true);
			}
		}

		// Close
		if (Input.GetKeyDown(KeyCode.LeftControl))
		{
			if (!anim.GetBool("Open_Anim"))
			{
				anim.SetBool("Open_Anim", true);
			}
			else
			{
				anim.SetBool("Open_Anim", false);
			}
		}
	}

}
