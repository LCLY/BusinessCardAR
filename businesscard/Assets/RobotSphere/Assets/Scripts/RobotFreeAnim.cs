using System.Collections;
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
    bool walk = true;
    bool walkLeft = false;
    bool walkRight = false;
    public Transform oriPos;
	// Use this for initialization
	void Awake()
	{
		anim = robot.GetComponent<Animator>();
        walktext = walkText.GetComponent<Text>();
        robot.transform.eulerAngles = rot;       
	}

	// Update is called once per frame
	void Update()
	{
		CheckKey();
        robot.transform.eulerAngles = rot;
        if (walkLeft)
        {
            robot.transform.Translate(0, 0, Time.deltaTime);
        }
        else
        {
            robot.transform.Translate(0, 0, 0);
        }

        if (walkRight)
        {
            robot.transform.Translate(0, Time.deltaTime, 0);
        }
        else
        {
            robot.transform.Translate(0, 0, 0);
        }
    }

    // Walk
    public void GetKeyWalk()
    {       
        if (walk)
        {           
            walk = false;
            walktext.text = "Walk";
            anim.SetBool("Walk_Anim", true);
        }
        else
        {         
            walk = true;
            walktext.text = "Stop";
            anim.SetBool("Walk_Anim", false);
        }      
    }
 
    // Rotate Left
    public void GetKeyLeft()
    {
        walkLeft = true;
        walkRight = false;
        Debug.Log("Left");
      
        rot[1] -= rotSpeed * Time.fixedDeltaTime;
    }
    // Rotate Right
    public void GetKeyRight()
    {
        walkRight = true;
        walkLeft = false;
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

    //reset position
    public void ResetPosition()
    {
        robot.transform.position = oriPos;
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
